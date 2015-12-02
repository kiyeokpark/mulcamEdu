var person1 = {
  name:"박기역"
}

var person2 = new Object();
person2.name = "기역,박";

person1.weight = 87;
person2.weight = 73;

person1.name = "이이름";

console.log(person1);
console.log(person2);

// 둘 다 동일한 속성 탐지 방안이나
// 후자의 방식이 권장되는 이유는 다음과 같다.
person1.age = undefined;
if( person1.age )
{
  console.log(person1.age);
}

person2.age = undefined;
if( "age" in person2 )
{
  console.log(person2.age);
}

if( person2.hasOwnProperty("age"))
{
  console.log(person2.age);
}

// 진짜 내꺼?
console.log("==========");
console.log(person1.toString());
console.log("toString" in person1 );
console.log(person1.hasOwnProperty("toString"));

console.log("name" in person1 );
console.log(person1.hasOwnProperty("name"));

delete person1.name;
console.log("name" in person1 );

delete person1;
console.log(person1);

console.log("=================");
var emptyInClosure={
  name:"aaa",
  age:17
};
function makeFunctions(a)
{
  var b = a;
  a = null;
  return function()
  {
    console.log(b);
    delete b.name;
    b.age = 20;
    b = null;
  }
};

var fn1 = makeFunctions(emptyInClosure);
var fn2 = makeFunctions(emptyInClosure);
fn1();
emptyInClosure.age = 30;
fn2();
console.log(emptyInClosure);

console.log("=================");
var trg = {x:20};

console.log(trg);
function changeValue(a)
{
  a.x = 30;
  console.log("IN FUNC : ");
  console.log(a);
  /*return function ()
  {
    a = 30;
  }*/
}
changeValue(trg);
console.log(trg);

console.log("=================");

var x = 1;
var arr=[1,2,3];
(function(n){
  n+=1;
})(x);
console.log(x);
(function(data){

  var temp = data.constructor().concat(data);
  temp.pop();
  console.log(temp);
})(arr);
console.log(arr);
