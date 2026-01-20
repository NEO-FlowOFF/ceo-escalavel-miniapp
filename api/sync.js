import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
    }

    // Key structure: "user:{id}:data"
    const userKey = `user:${userId}:data`;

    // SAVE (POST)
    if (req.method === 'POST') {
        const { gameState, timestamp } = req.body;

        if (!gameState) {
            return res.status(400).json({ error: 'Missing gameState' });
        }

        try {
            // Save entire state as JSON
            await kv.set(userKey, {
                state: gameState,
                last_updated: timestamp || Date.now()
            });

            return res.status(200).json({ ok: true });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to save data' });
        }
    }

    // LOAD (GET)
    else if (req.method === 'GET') {
        try {
            const data = await kv.get(userKey);

            if (!data) {
                return res.status(404).json({ error: 'No save found' });
            }

            return res.status(200).json({
                gameState: data.state,
                last_updated: data.last_updated
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to load data' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
