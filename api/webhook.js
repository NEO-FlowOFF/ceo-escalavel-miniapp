const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const WEB_APP_URL = "https://agenteflow.vercel.app/";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message, pre_checkout_query } = req.body;

    // 1. Handle Pre-Checkout Query (Validate before payment)
    if (pre_checkout_query) {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/answerPreCheckoutQuery`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                pre_checkout_query_id: pre_checkout_query.id,
                ok: true // Always approve for digital goods (unless you have limited stock logic)
            }),
        });
        return res.status(200).json({ ok: true });
    }

    // 2. Handle Messages (Commands or Successful Payments)
    if (!message) {
        return res.status(200).json({ ok: true });
    }

    const chatId = message.chat.id;

    // 2a. Handle Successful Payment
    if (message.successful_payment) {
        const payment = message.successful_payment;
        // Here you would typically update a database or notify the user
        // Since we are client-side heavy, the Client actively listens for the transaction completion.
        // But we send a receipt message to be nice.

        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: `✅ **Pagamento Confirmado!**\n\n` +
                    `Recebemos ${payment.total_amount} Stars.\n` +
                    `Seus recursos foram creditados na operação.\n\n` +
                    `_Mantenha o flow._`,
                parse_mode: 'Markdown'
            }),
        });
        return res.status(200).json({ ok: true });
    }

    // 2b. Handle Text Commands
    const text = message.text;
    let responseText = "";
    let replyMarkup = {};

    if (text === '/start') {
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
    } else if (text === '/app') {
        responseText = "Acesse o Console de Operação Agente Flow:";
        replyMarkup = {
            inline_keyboard: [
                [{ text: "🚀 INICIAR OPERAÇÃO", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (text === '/play') {
        responseText = "Gamificação iniciada. Acesse o console para continuar:";
        replyMarkup = {
            inline_keyboard: [
                [{ text: "🎮 JOGAR AGORA", web_app: { url: WEB_APP_URL } }]
            ]
        };
    } else if (text === '/help') {
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
    } else if (text === '/reset') {
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
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: responseText,
                parse_mode: 'Markdown',
                reply_markup: replyMarkup
            }),
        });
    }

    return res.status(200).json({ ok: true });
}
