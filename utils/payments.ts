import telegram, { webApp } from './telegramUtils';

export interface StoreItem {
    id: string;
    title: string;
    description: string;
    price: number; // in Stars
    icon: string;
    effect_type: 'capital' | 'insurance' | 'time_warp';
    effect_value: number;
}

type PaymentTelemetryEvent = 'invoice_created' | 'invoice_paid' | 'invoice_failed';

export const STORE_ITEMS: StoreItem[] = [
    {
        id: 'capital_injection_small',
        title: 'Capital Seed',
        description: 'Injeção imediata de caixa para sua operação.',
        price: 50,
        icon: '💰',
        effect_type: 'capital',
        effect_value: 50000 // $50k
    },
    {
        id: 'capital_injection_medium',
        title: 'Series A Funding',
        description: 'Rodada de investimento para escalar agressivamente.',
        price: 250,
        icon: '💵',
        effect_type: 'capital',
        effect_value: 500000 // $500k
    },
    {
        id: 'crash_insurance',
        title: 'Burnout Therapy',
        description: 'Remove 100% do stress acumulado e recupera crash.',
        price: 100,
        icon: '💊',
        effect_type: 'insurance',
        effect_value: 100 // 100% recovery
    }
];

class PaymentService {
    private async trackTelemetry(
        eventType: PaymentTelemetryEvent,
        item: StoreItem,
        extra: Record<string, unknown> = {}
    ): Promise<void> {
        try {
            const tgUser = telegram.getUser();
            const payload = {
                eventType,
                itemId: item.id,
                itemTitle: item.title,
                itemPrice: item.price,
                userId: tgUser?.id ? String(tgUser.id) : 'anonymous',
                username: tgUser?.username || tgUser?.first_name || 'anonymous',
                source: tgUser ? 'telegram' : 'visitor',
                appVersion: import.meta.env.VITE_APP_VERSION || 'unknown',
                timestamp: Date.now(),
                ...extra
            };

            await fetch('/api/payment-telemetry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.warn('[PaymentTelemetry] Event not persisted', eventType, error);
        }
    }

    async createInvoice(item: StoreItem): Promise<{ invoiceLink: string | null; errorMessage?: string; details?: unknown }> {
        try {
            const initData = webApp?.initData;
            const headers: Record<string, string> = { 'Content-Type': 'application/json' };
            if (initData) {
                headers['x-telegram-init-data'] = initData;
            }

            const response = await fetch('/api/create-invoice', {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    title: item.title,
                    description: item.description,
                    payload: item.id,
                    price: item.price,
                    initData: initData || undefined
                })
            });

            const data = await response.json();
            if (data.ok && data.invoiceLink) {
                return { invoiceLink: data.invoiceLink };
            }
            console.error('Falha ao criar invoice:', data);
            return {
                invoiceLink: null,
                errorMessage: data?.details?.description || data?.error || 'Falha ao criar invoice',
                details: data
            };
        } catch (error) {
            console.error('Erro de rede ao criar invoice:', error);
            return {
                invoiceLink: null,
                errorMessage: 'Erro de rede ao criar invoice',
                details: error
            };
        }
    }

    async purchaseItem(item: StoreItem, onSuccess: () => void, onError: (msg: string) => void) {
        if (!webApp) {
            void this.trackTelemetry('invoice_failed', item, {
                failureStage: 'open_invoice',
                invoiceStatus: 'webapp_missing',
                errorMessage: 'Telegram WebApp não detectado'
            });
            onError("Telegram WebApp não detectado.");
            return;
        }

        const invoiceResult = await this.createInvoice(item);
        const invoiceLink = invoiceResult.invoiceLink;

        if (!invoiceLink) {
            void this.trackTelemetry('invoice_failed', item, {
                failureStage: 'create_invoice',
                invoiceStatus: 'invoice_not_created',
                errorMessage: invoiceResult.errorMessage || 'Erro ao gerar link de pagamento'
            });
            onError("Erro ao gerar link de pagamento.");
            return;
        }

        void this.trackTelemetry('invoice_created', item, {
            invoiceStatus: 'created'
        });

        webApp.openInvoice(invoiceLink, (status: string) => {
            if (status === 'paid') {
                void this.trackTelemetry('invoice_paid', item, {
                    invoiceStatus: status
                });
                onSuccess();
            } else if (status === 'cancelled') {
                void this.trackTelemetry('invoice_failed', item, {
                    failureStage: 'checkout',
                    invoiceStatus: status,
                    errorMessage: 'Pagamento cancelado pelo usuário'
                });
                console.log('Pagamento cancelado pelo usuário');
            } else if (status === 'failed') {
                void this.trackTelemetry('invoice_failed', item, {
                    failureStage: 'checkout',
                    invoiceStatus: status,
                    errorMessage: 'Pagamento falhou'
                });
                onError("Pagamento falhou.");
            } else {
                void this.trackTelemetry('invoice_failed', item, {
                    failureStage: 'checkout',
                    invoiceStatus: status,
                    errorMessage: `Status inesperado: ${status}`
                });
                console.log('Status do pagamento:', status);
            }
        });
    }
}

export const paymentService = new PaymentService();
