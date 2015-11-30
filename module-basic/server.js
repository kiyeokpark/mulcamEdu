var http = require('http');
var currency = require('./currency');

var cur = 0;
var server = http.createServer(function(req,res){
  if( '/' == req.url ){
    switch (req.method) {
      case 'GET':
        show(res);
        break;
      case 'POST':
        add(req, res);
        break;
      default:
        badRequest(res);
    }
  }
  else {
    notFound(res);
  }
});
server.listen(3000);
console.log("Server is ready on port #3000...");
function show(res)
{
  var html = '<html><head><title>Todo List</title><meta charset="utf8"></head><body>'
    + '<h1>기준환율 : '+currency.getCurrency()+'</h1>'
    + '<ul>'
    + '<li>1000원 = '+currency.convertCurrency(1000,'krw','usd')+'달러</li>'
    + '<li>100달러 = '+currency.convertCurrency(100,'usd','krw')+'원</li>'
    +'</ul>'
    +'<form method="post" action="/">'
    +'<p><input type="text" name="item"/></p>'
    +'<p><input type="submit" value="Change Currency"/></p>'
    +'</form></body></html>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

function notFound(res)
{
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

function badRequest(res){
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bad Request');
}

var qs = require('querystring');

function add(req, res){
    var body = '';
    req.setEncoding('utf8');
    req.on('data', function (chunk){
      body += chunk;
      console.log("body : "+body.length+"  chunk : "+chunk.length+"\n");
    });
    req.on('end', function(){
      var obj = qs.parse(body);
      var i = parseFloat(obj.item, 10);
      console.log(i);
      if( !isNaN(i) )
        currency.updateCurrency(i);
      show(res);
    });
}
