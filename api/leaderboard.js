import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, score, user_id } = req.body;

        if (!name || !score || !user_id) {
            return res.status(400).json({ error: 'Missing fields' });
        }

        try {
            // 1. Add to sorted set (ZADD)
            await kv.zadd('leaderboard_valuation', { score: parseInt(score), member: `${name}::${user_id}` });
            return res.status(200).json({ ok: true });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to update leaderboard' });
        }
    }

    else if (req.method === 'GET') {
        try {
            // 2. Get Top 10 (ZREVRANGE)
            const rawData = await kv.zrange('leaderboard_valuation', 0, 9, { rev: true, withScores: true });

            // Format data: ['User::123', 500, 'User2::456', 300] -> [{name: 'User', score: 500}, ...]
            const formatted = [];
            for (let i = 0; i < rawData.length; i += 2) {
                const member = rawData[i];
                const score = rawData[i + 1];
                const [name] = member.split('::');
                formatted.push({ name, score });
            }

            return res.status(200).json({ leaderboard: formatted });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to fetch leaderboard' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
