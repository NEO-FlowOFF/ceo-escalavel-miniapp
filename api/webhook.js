const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const WEB_APP_URL = "https://agenteflow.vercel.app/";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;

    if (!message || !message.text) {
        return res.status(200).json({ ok: true });
    }

    const chatId = message.chat.id;
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
    } else if (text === '/help') {
        responseText = `**PROTOCOLO DE SUPORTE**\n\n` +
            `Se você precisa de diagnósticos reais para escalar sua operação fora da simulação:\n\n` +
            `🚀 [Agência FlowOff](https://flowoff.xyz)\n` +
            `💬 [Suporte Direto](https://t.me/neomello)\n\n` +
            `Use o botão abaixo para retornar à operação.`;
        replyMarkup = {
            inline_keyboard: [
                [{ text: "Voltar para o App", web_app: { url: WEB_APP_URL } }]
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
