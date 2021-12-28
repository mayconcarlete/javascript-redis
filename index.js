const { createClient } = require('redis')

const client = createClient(6379, '127.0.0.1')

client.on('error', err => console.log(`Error: ${err}`))

client.on('connect', data => console.log(`Connected: ${data}`))

client.on('ready', data => console.log(`Is ready: true ${data}`))


module.exports = client