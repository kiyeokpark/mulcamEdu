var fs = require('fs');
var gzip = require('zlib').createGzip();

var readableFileStream = fs.createReadStream('./02_pipe.js');

readableFileStream.pipe(process.stdout);

var outStream = fs.createWriteStream('./02_pipe.js.gz');

readableFileStream.pipe(gzip).pipe(outStream);
