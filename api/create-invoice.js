const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { title, description, payload, price, currency = "XTR" } = req.body;

    if (!title || !description || !payload || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/createInvoiceLink`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                description,
                payload,
                provider_token: "", // Empty for Stars
                currency: "XTR", // Stars currency
                prices: [{ label: title, amount: parseInt(price) }] // Price in Stars
            }),
        });

        const data = await response.json();

        if (!data.ok) {
            console.error('Telegram API Error:', data);
            return res.status(500).json({ error: 'Failed to create invoice link', details: data });
        }

        return res.status(200).json({ ok: true, invoiceLink: data.result });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
