var fs = require('fs');
var ws = fs.createWriteStream('message.txt');

ws.write('안녕하세요');
ws.end('Node.js입니다.');
