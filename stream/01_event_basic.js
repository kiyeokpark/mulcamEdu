var Stream = require('stream').Stream;
var EventEmitter = require('events').EventEmitter;

var stream = new Stream();

console.log(stream instanceof EventEmitter );
