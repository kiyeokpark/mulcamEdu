var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function a(){});
emitter.on('foo', function b(){});
emitter.on('bar', function c(){});
console.log(emitter);
console.log('foo listeners = ',emitter.listeners('foo'));
console.log('bar listeners = ',emitter.listeners('bar'));
