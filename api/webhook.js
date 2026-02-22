const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_WEBHOOK_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET;
const WEB_APP_URL = process.env.WEB_APP_URL || "https://agenteflow.vercel.app/";

const COMMANDS = new Set(['/start', '/app', '/play', '/help', '/reset']);

function normalizeCommand(text) {
    if (typeof text !== 'string') return null;
    const raw = text.trim().split(/\s+/)[0] || '';
    if (!raw.startsWith('/')) return null;
    const command = raw.split('@')[0].toLowerCase();
    return command.length > 64 ? null : command;
}

async function callTelegram(method, payload) {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!response.ok || !data.ok) {
        console.error(`[Webhook] Telegram API error on ${method}`, data);
        throw new Error(`Telegram API error on ${method}`);
    }
    return data.result;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!TELEGRAM_TOKEN) {
        return res.status(500).json({ error: 'Telegram token is not configured' });
    }

    if (TELEGRAM_WEBHOOK_SECRET) {
        const headerSecret = req.headers['x-telegram-bot-api-secret-token'];
        if (headerSecret !== TELEGRAM_WEBHOOK_SECRET) {
            return res.status(401).json({ error: 'Unauthorized webhook source' });
        }
    }

    const { message, pre_checkout_query } = req.body;

    // 1. Handle Pre-Checkout Query (Validate before payment)
    if (pre_checkout_query) {
        if (!pre_checkout_query.id) {
            return res.status(400).json({ error: 'Invalid pre_checkout_query payload' });
        }

        try {
            await callTelegram('answerPreCheckoutQuery', {
                pre_checkout_query_id: pre_checkout_query.id,
                ok: true // Always approve for digital goods (unless you have limited stock logic)
            });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to answer pre_checkout_query' });
        }

        return res.status(200).json({ ok: true });
    }

    // 2. Handle Messages (Commands or Successful Payments)
    if (!message) {
        return res.status(200).json({ ok: true });
    }

    const chatId = message?.chat?.id;
    if (!chatId) {
        return res.status(200).json({ ok: true });
    }

    // Ignora grupos/canais para reduzir superfície de abuso.
    if (message?.chat?.type && message.chat.type !== 'private') {
        return res.status(200).json({ ok: true });
    }

    // 2a. Handle Successful Payment
    if (message.successful_payment) {
        const payment = message.successful_payment;
        // Here you would typically update a database or notify the user
        // Since we are client-side heavy, the Client actively listens for the transaction completion.
        // But we send a receipt message to be nice.

        try {
            await callTelegram('sendMessage', {
                chat_id: chatId,
                text: `✅ **Pagamento Confirmado!**\n\n` +
                    `Recebemos ${payment.total_amount} Stars.\n` +
                    `Seus recursos foram creditados na operação.\n\n` +
                    `_Mantenha o flow._`,
                parse_mode: 'Markdown'
            });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to notify payment confirmation' });
        }

        return res.status(200).json({ ok: true });
    }

    // 2b. Handle Text Commands
    const command = normalizeCommand(message.text);
    if (!command) {
        return res.status(200).json({ ok: true });
    }

    if (!COMMANDS.has(command)) {
        try {
            await callTelegram('sendMessage', {
                chat_id: chatId,
                text: `Comando não reconhecido.\n\nUse /help para suporte com @neomello.`,
                parse_mode: 'Markdown'
            });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to handle unknown command' });
        }
        return res.status(200).json({ ok: true });
    }

    let responseText = "";
    let replyMarkup = {};

    if (command === '/start') {
        responseText = `**> INICIANDO PROTOCOLO AGENTE FLOW v2.5...**\n\n` +
            `Bem-vindo à central de comando, Operador.\n\n` +
            `A era da escala manual acabou. Seu tempo é o ativo mais caro da sua empresa, e o **Agent Flow** é a ferramenta para devolvê-lo.\n\n` +
            `🛠 **Eliminar Gargalos**: Identificar onde sua operação está travada.\n` +
            `🤖 **Desprender Frotas**: Contratar Agentes IA para trabalhar 24/7.\n` +
            `📈 **Gerar Valuation**: Construir equity digital real.\n\n` +
            `**Pare de ser o gargalo. Comece a ser o arquiteto.**`;

        replyMarkup = {
            inline_keyboard: [
                [{ text: "🕹 ABRIR CONSOLE", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (command === '/app') {
        responseText = "Acesse o Console de Operação Agente Flow:";
        replyMarkup = {
            inline_keyboard: [
                [{ text: "🚀 INICIAR OPERAÇÃO", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (command === '/play') {
        responseText = "Gamificação iniciada. Acesse o console para continuar:";
        replyMarkup = {
            inline_keyboard: [
                [{ text: "🎮 JOGAR AGORA", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (command === '/help') {
        responseText = `**PROTOCOLO DE SUPORTE**\n\n` +
            `Se você precisa de diagnósticos reais para escalar sua operação fora da simulação:\n\n` +
            `🚀 [Agência FlowOFF](https://flowoff.xyz)\n` +
            `💬 [Suporte Direto](https://t.me/neomello)\n\n` +
            `Use o botão abaixo para retornar à operação.`;
        replyMarkup = {
            inline_keyboard: [
                [{ text: "Voltar para o App", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (command === '/reset') {
        responseText = `⚠️ **RESETAR DADOS DO JOGO**\n\n` +
            `Isso vai ZERAR completamente seu progresso:\n` +
            `• Capital e Valuation\n` +
            `• Agentes adquiridos\n` +
            `• Status e conquistas\n` +
            `• Streak e tarefas diárias\n\n` +
            `**ATENÇÃO:** Esta ação é IRREVERSÍVEL!\n\n` +
            `Para resetar, abra o console e digite no navegador:\n` +
            `\`resetAgentFlow()\`\n\n` +
            `Ou use o botão de reset dentro do jogo.`;
        replyMarkup = {
            inline_keyboard: [
                [{ text: "🕹 ABRIR CONSOLE", web_app: { url: WEB_APP_URL } }]
            ]
        };
    }

    if (responseText) {
        try {
            await callTelegram('sendMessage', {
                chat_id: chatId,
                text: responseText,
                parse_mode: 'Markdown',
                reply_markup: replyMarkup
            });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to send command response' });
        }
    }

    return res.status(200).json({ ok: true });
}
