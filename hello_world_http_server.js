var http = require('http');
http.createServer(processHttpRequest).listen(3000);

// HTTP 요청을 처리하는 콜백
// 요청이 있을때마다 호출된다
// 인자
// req : HTTP 요청
// res : HTTP 응답
function processHttpRequest(req, res)
{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hello World\n');
}

console.log('New Server running at http://localhost:3000/');
