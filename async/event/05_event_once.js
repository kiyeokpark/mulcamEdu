var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

setTimeout(function(){
  emitter.emit('foo',{a:123},{b:456});
},1000);

setTimeout(function(){
  emitter.emit('foo',{a:456},{b:789});
},5000);

var fooHandler = function(arg1, arg2){
  console.log('이벤트 foo 발생. 인자 : ',arg1  ,  arg2);
};

emitter.once('foo', fooHandler);

console.log('Event Settled');
