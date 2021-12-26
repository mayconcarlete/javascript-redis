const { createClient } = require('redis')

const server = createClient(6379, '127.0.0.1')

module.exports = server