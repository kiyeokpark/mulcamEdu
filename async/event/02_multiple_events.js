var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

setTimeout(function(){emitter.emit('foo');},1000);

emitter.on('foo', function(){
  console.log('foo 수신자1');
});

emitter.on('foo', function(){
  console.log('foo 수신자2');
});

console.log('이벤트 설정 종료');
