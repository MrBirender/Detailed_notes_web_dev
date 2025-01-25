const logEvents = require('./eventEmitter');

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {};

/* initialize object */
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => logEvents(msg))

setTimeout(()=> {
 myEmitter.emit('log', 'log event emitted!')
}, 2000)