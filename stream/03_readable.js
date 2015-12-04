process.stdin.on('readable', function(){
  var buf = process.stdin.read();
  if( buf != null ){
    console.log('Chunk:');
    process.stdout.write(buf.toString());
  }
  else {
    console.log('읽기완료');
  }
})
