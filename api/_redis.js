import Redis from 'ioredis';

let client;

export function getRedis() {
  if (!client) {
    client = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 3,
      enableReadyCheck: false,
    });
  }
  return client;
}
