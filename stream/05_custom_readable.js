var Readable = require('stream').Readable;
var inherits = require('util').inherits;

function Counter(){
  Readable.call(this);
  this._max = 1000;
  this._index = 1;
}
inherits(Counter, Readable);

Counter.prototype._read = function(){
  var i = this._index++;
  if( i > this._max){
    this.push(null);
  }
  else {
    var chunk = i + ' ';
    this.push(chunk);
  }
}

var counter = new Counter();
counter.pipe(process.stdout);
