var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  // url 확인
  if(req.url == '/')
  {
    getTitles(res);
  }
  else {
    res.writeHead(404, {'Content-Type':'text/html'});
    res.end(req.url +" is wrong address");
  }
  console.log("END");
}).listen(8000,"127.0.0.1");

// JSON 파일로 부터 타이틀을 불러와서
function getTitles(res)
{
  fs.readFile('./titles.json', function(err, data)
  {
    // 파일 읽기 오류
    if(err) return hadError(err,res);
    getTemplate(JSON.parse(data.toString()), res);

  });
}
function getTemplate(title, res)
{
  fs.readFile('./template.html', function(err,data){
    if(err) return hadError(err,res);
    var tmpl = data.toString();
    formatHtml(title, tmpl, res);
  });
}
function formatHtml(title, tmpl, res)
{
  var html = tmpl.replace('%', title.join('</li><li>'));
  console.log(title);
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(html);
}

function hadError(err, res)
{
    console.error(err);
    res.end('Server Error');
}

console.log("Server is working.");
