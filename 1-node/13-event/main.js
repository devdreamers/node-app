const logger = require('./logger.js');
//const EventEmitter = require('events');
//const emitter = new EventEmitter();
const emitter = new logger.Logger();

emitter.on('log', (event) => {
    console.log(event);
});

emitter.log(() => {
    console.log('.......doing something!');
});