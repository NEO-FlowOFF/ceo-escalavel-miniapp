import { kv } from '@vercel/kv';

const ALLOWED_EVENTS = new Set(['invoice_created', 'invoice_paid', 'invoice_failed']);
const TIMELINE_KEY = 'payments:timeline';

function normalizeString(value, max = 256) {
    if (value === undefined || value === null) return null;
    const text = String(value).trim();
    return text.length > max ? text.slice(0, max) : text;
}

function dayTag(timestamp) {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
    const day = `${date.getUTCDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            eventType,
            itemId,
            itemTitle,
            itemPrice,
            userId,
            username,
            source,
            appVersion,
            invoiceStatus,
            errorMessage,
            failureStage,
            timestamp
        } = req.body || {};

        if (!ALLOWED_EVENTS.has(eventType)) {
            return res.status(400).json({ error: 'Invalid eventType' });
        }

        const now = Number(timestamp) || Date.now();
        const eventId = `payment:event:${now}:${Math.random().toString(36).slice(2, 9)}`;
        const eventPayload = {
            id: eventId,
            eventType,
            timestamp: now,
            day: dayTag(now),
            userId: normalizeString(userId, 128),
            username: normalizeString(username, 128),
            source: normalizeString(source, 32),
            appVersion: normalizeString(appVersion, 32),
            itemId: normalizeString(itemId, 128),
            itemTitle: normalizeString(itemTitle, 128),
            itemPrice: Number.isFinite(Number(itemPrice)) ? Number(itemPrice) : null,
            invoiceStatus: normalizeString(invoiceStatus, 32),
            failureStage: normalizeString(failureStage, 64),
            errorMessage: normalizeString(errorMessage, 512)
        };

        try {
            await kv.set(eventId, eventPayload, { ex: 60 * 60 * 24 * 90 });
            await kv.zadd(TIMELINE_KEY, { score: now, member: eventId });

            await Promise.all([
                kv.incr(`payments:count:${eventType}`),
                kv.incr(`payments:count:${eventType}:${eventPayload.day}`)
            ]);

            return res.status(200).json({ ok: true, eventId });
        } catch (error) {
            console.error('[PaymentTelemetry] Failed to persist event', error);
            return res.status(500).json({ error: 'Failed to persist telemetry' });
        }
    }

    if (req.method === 'GET') {
        const limit = Math.min(100, Math.max(1, Number.parseInt(String(req.query.limit || '20'), 10) || 20));

        try {
            const [created, paid, failed, eventIds] = await Promise.all([
                kv.get('payments:count:invoice_created'),
                kv.get('payments:count:invoice_paid'),
                kv.get('payments:count:invoice_failed'),
                kv.zrange(TIMELINE_KEY, 0, limit - 1, { rev: true })
            ]);

            const events = await Promise.all((eventIds || []).map((id) => kv.get(id)));

            return res.status(200).json({
                ok: true,
                counters: {
                    invoice_created: Number(created || 0),
                    invoice_paid: Number(paid || 0),
                    invoice_failed: Number(failed || 0)
                },
                events: events.filter(Boolean)
            });
        } catch (error) {
            console.error('[PaymentTelemetry] Failed to fetch telemetry', error);
            return res.status(500).json({ error: 'Failed to fetch telemetry' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
