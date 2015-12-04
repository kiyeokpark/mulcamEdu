var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.emit('error', new Error('뭔가 잘못됨'));

console.log('실행안됨');
