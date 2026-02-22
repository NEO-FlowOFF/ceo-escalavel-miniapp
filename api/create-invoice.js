import crypto from 'node:crypto';

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_INITDATA_ENFORCE = process.env.TELEGRAM_INITDATA_ENFORCE === 'true';
const APP_ORIGIN_ALLOWLIST = (process.env.APP_ORIGIN_ALLOWLIST || '')
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean);

const MAX_TITLE_LENGTH = 32;
const MAX_DESCRIPTION_LENGTH = 255;
const MAX_PAYLOAD_LENGTH = 128;
const MAX_STARS_AMOUNT = 100000;

function isOriginAllowed(origin) {
    if (!APP_ORIGIN_ALLOWLIST.length) return true;
    if (!origin) return true;
    return APP_ORIGIN_ALLOWLIST.includes(origin);
}

function timingSafeHexEquals(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(Buffer.from(a, 'hex'), Buffer.from(b, 'hex'));
}

function verifyTelegramInitData(initData, botToken) {
    if (!initData || !botToken) return false;

    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    if (!hash) return false;

    params.delete('hash');
    const dataCheckString = [...params.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => `${key}=${value}`)
        .join('\n');

    const secretKey = crypto
        .createHmac('sha256', 'WebAppData')
        .update(botToken)
        .digest();

    const calculatedHash = crypto
        .createHmac('sha256', secretKey)
        .update(dataCheckString)
        .digest('hex');

    if (!timingSafeHexEquals(calculatedHash, hash)) {
        return false;
    }

    const authDate = Number.parseInt(params.get('auth_date') || '0', 10);
    if (!authDate) return false;
    const ageSeconds = Math.floor(Date.now() / 1000) - authDate;
    const maxAgeSeconds = 60 * 60 * 24 * 7; // 7 dias
    return ageSeconds >= 0 && ageSeconds <= maxAgeSeconds;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!TELEGRAM_TOKEN) {
        return res.status(500).json({ error: 'Telegram token is not configured' });
    }

    const requestOrigin = req.headers.origin;
    if (!isOriginAllowed(requestOrigin)) {
        return res.status(403).json({ error: 'Origin not allowed' });
    }

    const initDataHeader = req.headers['x-telegram-init-data'];
    const initDataBody = req.body?.initData;
    const initData = typeof initDataHeader === 'string' && initDataHeader.length > 0
        ? initDataHeader
        : (typeof initDataBody === 'string' ? initDataBody : '');

    if (TELEGRAM_INITDATA_ENFORCE && !verifyTelegramInitData(initData, TELEGRAM_TOKEN)) {
        return res.status(401).json({ error: 'Unauthorized request' });
    }

    const { title, description, payload, price, currency = "XTR" } = req.body;

    if (!title || !description || !payload || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (typeof title !== 'string' || title.length > MAX_TITLE_LENGTH) {
        return res.status(400).json({ error: `Invalid title. Max ${MAX_TITLE_LENGTH} chars.` });
    }

    if (typeof description !== 'string' || description.length > MAX_DESCRIPTION_LENGTH) {
        return res.status(400).json({ error: `Invalid description. Max ${MAX_DESCRIPTION_LENGTH} chars.` });
    }

    if (typeof payload !== 'string' || payload.length > MAX_PAYLOAD_LENGTH) {
        return res.status(400).json({ error: `Invalid payload. Max ${MAX_PAYLOAD_LENGTH} chars.` });
    }

    const parsedPrice = Number.parseInt(String(price), 10);
    if (!Number.isInteger(parsedPrice) || parsedPrice <= 0 || parsedPrice > MAX_STARS_AMOUNT) {
        return res.status(400).json({ error: `Invalid price. Use integer between 1 and ${MAX_STARS_AMOUNT}.` });
    }

    if (currency !== 'XTR') {
        return res.status(400).json({ error: 'Only XTR currency is supported.' });
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
                prices: [{ label: title, amount: parsedPrice }] // Price in Stars
            }),
        });

        const data = await response.json();

        if (!data.ok) {
            console.error('Telegram API Error:', data);
            const statusCode = data?.error_code === 401 ? 401 : 500;
            return res.status(statusCode).json({ error: 'Failed to create invoice link', details: data });
        }

        return res.status(200).json({ ok: true, invoiceLink: data.result });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
