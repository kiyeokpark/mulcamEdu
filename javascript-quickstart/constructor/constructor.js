function Person(name){
  var name = name;
  Object.defineProperty(this, "name",  {get:function(){return name},  set:function(val){name = val}});
  this.sayName = function(){
    console.log('%s 입니다', this.name );
  };
  function test(){
    console.log('테스트입니다');
  };

  if(!(this instanceof Person)){
    console.log("Wrong Approach");
    throw Error("WrongApp");
  }
}
function Alien(){}

var person1 = new Person('나');
var person2 = new Person('너');
var person3 = Person;
var person4 = new person3('aaa');
var person5 = new person1.constructor("bbb");
//var person6 = Person("aerdre");
person4.sayName();
person5.sayName();

//person6.sayName();
delete person1.name;
console.log(person1);
console.log(person1.name);

console.log(person1 instanceof Person);
console.log(person2 instanceof Person);
console.log(person3 instanceof Person);
console.log(person4 instanceof Person);
console.log(person5 instanceof Person);

console.log(person1.constructor == Person);
console.log(person2.constructor == Person);

person1.sayName();
person2.sayName();

var alien1 = new Alien();
var alien2 = new Alien();

console.log(alien1 instanceof Alien);
console.log(alien2 instanceof Alien);

console.log(alien1.constructor == Alien);
console.log(alien2.constructor == Alien);
