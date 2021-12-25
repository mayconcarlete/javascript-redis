const { createClient } = require('redis')

;
(async () => {
  const client = createClient(6379, '127.0.0.1')

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('name', 'maykeropsq');
  await client.set('lastname', 'carlete');

  // define um tempo de expiracao para a chave
  await client.set('nickname', 'pesk')
  await client.expire('nickname', 3)

  const value = await client.get('nickname');
  console.log(value)
})();