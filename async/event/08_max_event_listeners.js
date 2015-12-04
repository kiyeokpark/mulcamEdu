var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

var listenersCalled = 0;

function addListener(){
  emitter.on('foo', function(){listenersCalled++})
};

for( var i = 0 ; i < 20 ; i++ )
{
  addListener();
}

emitter.emit('foo');
console.log(emitter.getMaxListeners());
console.log(listenersCalled);
