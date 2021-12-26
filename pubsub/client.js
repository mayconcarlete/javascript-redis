const server = require('./server')
;

(
  async() => {
    await server.connect()
    server.on('error', console.log)
    const subscriber = server.duplicate()
    await subscriber.connect()

    await subscriber.subscribe('channel', msg => console.log(msg))

    await server.publish('channel', 'Hello world from pubsub')

  }

)()