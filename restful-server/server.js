var http = require('http');
var url = require('url');
var items = []; // 메모리 데이터베이스(?)

var server = http.createServer(function(req, res){
  //HTTP 메소드 (GET, POST, PUT, DELETE) 탐지
  console.log("Request arrived  ==> " + req.method);
  switch (req.method) {
    case 'POST':
      var item = '';
      req.setEncoding('utf8');
      // 데이터 스트림이 발생하는 경우
      req.on('data', function(chunk){
        item += chunk;
        console.log("\nitem : "+item);
      });
      // 데이터 스트림이 종료되는 경우
      req.on('end', function(){
        items.push(item);
        res.end('OK\n');
      });
      break;
    case 'GET':
      items.forEach(function(item, i){
        res.write(i + ') '+item+'\n');
      });
      res.end();
      break;
    case 'DELETE':
      var path = url.parse(req.url).pathname;
      var i = parseInt(path.slice(1), 10);
      console.log("Delete target : "+i);
      if( isNaN(i) )
      {
        res.statusCode = 400;
        res.end('Invalid item id');
      }
      else if(!items[i])
      {
        res.statusCode = 404;
        res.end('Item not found');
      }
      else
      {
        items.splice(i, 1);
        res.end('OK\n');
      }
      break;
  }
});

server.listen(3000);
console.log('Server is working on Port 3000..');
