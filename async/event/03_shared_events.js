var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

setTimeout(function(){emitter.emit('foo', {handled:false});},1000);
setTimeout(function(){emitter.emit('bar', {handled:false});},1500);
var test = function(ev){
  console.log('공통 수신기', ev);
  ev.handled= true;
};
emitter.on('foo', test);

emitter.on('foo', function(ev){
  console.log('foo 수신기2', ev);
  if( ev.handled ){
    console.log('이벤트가 이미 처리됨');
  }
})

emitter.on('bar', test);

emitter.on('bar', function(ev){
  console.log('bar 수신기2', ev);
  if( ev.handled ){
    console.log('이벤트가 이미 처리되었음을 알림');
  }
})
