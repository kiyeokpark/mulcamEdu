var a = 20;

function foo(){
  a = a+1;
  console.log(a);
}

function bar(){
  a= a*2;
  console.log(a);
}

console.log(a);

var timeout1 = Math.random()*5000;
var timeout2 = Math.random()*5000;
console.log(timeout1 + "     " + timeout2);

setTimeout(foo, timeout1)
setTimeout(bar, timeout2)
