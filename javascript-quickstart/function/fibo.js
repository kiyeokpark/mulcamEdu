function makeFibonacci(a, b)
{
  //var first = a;
  //var next = b;
  return function()
  {
    var temp = b;
    b = a + b;
    a = temp;
    return b;
  }
}

var nextFibonacci = makeFibonacci(0, 1);
for( var i = 0 ; i < 10 ; i++ )
  console.log(nextFibonacci());
