//실행할 때마다, 한개의 원소가 추가되는 클로져함수

function makeNumGenerator(arr)
{
  var pArr = arr;
  return function()
  {
    pArr.push(pArr[pArr.length-1]+1);
    return pArr;
  }
}

var numGenerator = makeNumGenerator([0]);
var numGenerator2 = makeNumGenerator([90]);

for( var i = 0 ; i < 10 ; i++ )
  { numGenerator(); numGenerator2(); }

console.log(numGenerator().join(", "));

console.log(numGenerator2().join(", "));
