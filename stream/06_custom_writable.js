var Writable = require('stream').Writable;
var fs = require('fs');
var inherits = require('util').inherits;

function Logger(){
  Writable.call(this);
  this.index = 1;
}
inherits(Logger, Writable);

Logger.prototype._write = function(chunk){
  console.log(this.index +'   '+chunk.length);
  this.index++;
}

var logger = new Logger();
var readableStream = fs.createReadStream('./message.txt');

readableStream.pipe(logger);
