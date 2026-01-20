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
    async createInvoice(item: StoreItem): Promise<string | null> {
        try {
            const response = await fetch('/api/create-invoice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: item.title,
                    description: item.description,
                    payload: item.id,
                    price: item.price
                })
            });

            const data = await response.json();
            if (data.ok && data.invoiceLink) {
                return data.invoiceLink;
            }
            console.error('Falha ao criar invoice:', data);
            return null;
        } catch (error) {
            console.error('Erro de rede ao criar invoice:', error);
            return null;
        }
    }

    async purchaseItem(item: StoreItem, onSuccess: () => void, onError: (msg: string) => void) {
        if (!webApp) {
            onError("Telegram WebApp não detectado.");
            return;
        }

        const invoiceLink = await this.createInvoice(item);

        if (!invoiceLink) {
            onError("Erro ao gerar link de pagamento.");
            return;
        }

        webApp.openInvoice(invoiceLink, (status: string) => {
            if (status === 'paid') {
                onSuccess();
            } else if (status === 'cancelled') {
                console.log('Pagamento cancelado pelo usuário');
            } else if (status === 'failed') {
                onError("Pagamento falhou.");
            } else {
                console.log('Status do pagamento:', status);
            }
        });
    }
}

export const paymentService = new PaymentService();
