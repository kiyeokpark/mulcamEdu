var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();

var db2 = new sqlite3.Database('test.db');
db2.serialize(function()
{
  db2.each("SELECT one, two from tbl1", function(err, row){
    if( err )
    console.log(err);
    else
    console.log(row.one + "    " + row.two);
  });
});
db2.close();
