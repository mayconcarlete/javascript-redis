const { createClient } = require('redis')

;
(async () => {
  const client = createClient(6379, '127.0.0.1')

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('name', 'maykeropsq');
  await client.set('lastname', 'carlete');
  const value = await client.get('name');
  console.log(value)
})();