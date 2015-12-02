var result = add(1,2);
console.log(result);

function add( a,b)
{
  return a+b;
}


var result = product(2,4);
console.log(result);

// 표현식으로 사용될때는 순서가 중요
// 변수의 위치가 관련 있기 때문임.
var product = function(a,b)
{
  return a*b;
}
