var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function(arg1, arg2){
  console.log('이벤트 foo 발생. 인자 : ',arg1  ,  arg2);
});

setTimeout(function(){
  emitter.emit('foo',{a:123},{b:456});
},1000);

console.log('이벤트 설정 종료');
