const { createClient } = require('redis')

const client = createClient(6379, '127.0.0.1')

client.on('connect', err => console.log(err))
client.on('error', err => console.log(err))
client.on('ready', () => console.log('Cliente está funcionando'))

client.connect()