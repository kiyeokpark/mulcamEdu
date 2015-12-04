var fs = require('fs');
var assert = require('assert');

var now;
var contentBuffer;
var filename = "now.txt";

console.log('-- 동기적 방식 --');
now = '11111111111111111111111111111111111111111111\
111111111111111111111111111111111111111111111111111\
111111111111111111111111111111111111111111111111111\
111111111111111111111111111111111111111111111111111';
fs.writeFileSync(filename, now);
contentBuffer = fs.readFileSync(filename);
assert(contentBuffer == now);
console.log(contentBuffer.toString());

console.log('--비동기방식--');
now = '22222222222222222222222222222222222222222222\
222222222222222222222222222222222222222222222222222\
222222222222222222222222222222222222222222222222222\
222222222222222222222222222222222222222222222222222\
222222222222222222222222222222222222222222222222222\
222222222222222222222222222222222222222222222222222';
/*
fs.writeFile(filename, now, function(err){

});

fs.readFile(filename, function(err,data){
  if(err) throw err;
  contentBuffer = data;
  content = contentBuffer.toString();
  console.log(content.substr(0,100));
  assert(content == now);
});
*/
// 위는 잘못된 비동기 방식의 예제
// 아래와 같이 콜백함수가 불러질 경우에만 비동기가 완료했다는 것을 알 수 있음
// 따라서 순서가 있는 비동기 처리는 콜백 함수 내에서 호출되도록 처리가 필요함
fs.writeFile(filename, now, function(err){
    if( err ) throw err;
    fs.readFile(filename, function(err,data){
      if(err) throw err;
      contentBuffer = data;
      content = contentBuffer.toString();
      console.log(content);
      assert(content == now);
    });

});
