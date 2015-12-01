var connect = require('connect');
var app = connect();
app.use(logger);
app.use('/file',restrinctFileAccess);
app.use('/file',serveStaticFiles);
app.use('/admin',admin);
app.use(hello);
app.listen(3000);

function logger(req, res, next)
{
  //res.setHeader('Content-Type', 'text/plain');
  console.log('%s %s', req.method, req.url);
  next();
}

function hello(req, res){
  if( !res.headersSent )
    res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
}

function restrinctFileAccess(req, res, next){
  console.log('in restrinctFileAccess : %s %s', req.method, req.url);
  if( req.url == '/')
    next();
  else {
    res.end('GET OUT');
  }
}

function serveStaticFiles(req, res, next)
{
  res.setHeader('Content-Type', 'text/plain');
  res.write('serveStaticFiles\n');
  next();
}

function admin(req, res, next){
  switch (req.url) {
    case '/':
      res.end('try /users');
      break;
    case '/users':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(['tobi','loki','jane']));
      break;
  }
}
