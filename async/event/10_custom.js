var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

function Foo(){
;
}
inherits(Foo, EventEmitter);
Foo.prototype.connect = function(){
  // To do Something
  console.log('Connection Complete');
  this.emit('connected');
}

var foo = new Foo();
foo.on('connected', function(){
  console.log('Someting connected');
});

foo.connect();
