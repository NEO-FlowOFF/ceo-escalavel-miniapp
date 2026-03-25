import { getRedis } from './_redis.js';

export default async function handler(req, res) {
  const redis = getRedis();

  if (req.method === 'POST') {
    const { name, score, user_id } = req.body;

    if (!name || !score || !user_id) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    try {
      await redis.zadd('leaderboard_valuation', parseInt(score), `${name}::${user_id}`);
      return res.status(200).json({ ok: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to update leaderboard' });
    }
  }

  if (req.method === 'GET') {
    try {
      const rawData = await redis.zrevrange('leaderboard_valuation', 0, 9, 'WITHSCORES');

      const formatted = [];
      for (let i = 0; i < rawData.length; i += 2) {
        const member = rawData[i];
        const score = rawData[i + 1];
        const [name] = member.split('::');
        formatted.push({ name, score: Number(score) });
      }

      return res.status(200).json({ leaderboard: formatted });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
