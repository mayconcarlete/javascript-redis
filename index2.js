const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', (a,b) => console.log(a,b))
emitter.on('event', () => console.log('event from callback 2'))


emitter.emit('event', 1, 2)