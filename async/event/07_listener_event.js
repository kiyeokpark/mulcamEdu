var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('removeListener', function(eventName, callback){
  console.log(eventName, '수신기 삭제됨 ', callback.name);
});

emitter.on('newListener', function bd(eventName, callback){
  console.log(eventName,'수신기 등록됨 ', callback.name);
});
function a(arg1, arg2){
  console.log('이벤트 foo 발생. 인자 : ',arg1  ,  arg2);
};

function b(){};
emitter.once('foo', a);
emitter.on('foo', b);

setTimeout(function(){
  emitter.emit('foo',{a:123},{b:456});
},1000);

emitter.removeListener('foo', b);
