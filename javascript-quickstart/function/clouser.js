function counter2(start){
  var count = start;
  return function(){return function(){return function(){return function()
  {
    count += 1;
    return count;
  }}}};
}

function counter(){
  var count = 0;
  count += 1;
  return count;
}

var cnt = counter2(1)()()();

for( var i = 0 ; i < 5 ; i ++ )
  console.log(cnt());
