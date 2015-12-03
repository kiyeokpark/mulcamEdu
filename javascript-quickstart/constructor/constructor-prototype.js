
function Person(name1){
  this.name = name1;
  console.log();
}

Person.prototype.sayName = function(){
  console.log('%s 입니다', this.name );
};

var person1 = new Person("PERSON1");

console.log( "sayName" in person1);
console.log(person1.hasOwnProperty("sayName"));

console.log(person1);
person1.sayName();

var person2 = new Person("PERSON2");

console.log( "name" in person1);
console.log(person1.hasOwnProperty("name"));
console.log( "name" in person2);
console.log(person2.hasOwnProperty("name"));

console.log(person2);
person1.sayName();
person2.sayName();
console.log(typeof Person);

Person.prototype.langs=[];

person1.langs.push('aaa');
person2.langs.push('bbb');

console.log(person1.langs);
console.log(person2.langs);

Person.printName = function()
{
  console.log(this.name+" Death");
};
console.log(Object.getOwnPropertyNames(Person));
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getOwnPropertyNames(person1));
console.log(Object.getOwnPropertyNames(person2));

Person.printName();
/**
※ 아래와 같은 방법(한번에 여러 속성을 등록)은 사용하지 않도록 한다.
**/
Person.prototype = {
  constructor:Person,
  sendMail:function(){
    console.log("adsdsadsadsad");
  },
  sendText:function(){
    console.log("qwewqewqewqe");
  }
}

console.log(Object.getOwnPropertyNames(Person));
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.getOwnPropertyNames(person1));
console.log(Object.getOwnPropertyNames(person2));
person1.sayName();
var person7 = new Person("name");
console.log(person7);
console.log(person1 instanceof Person);
console.log(person1.constructor == Person);
console.log("=====UP1 , DOWN 7 ====")
console.log(person7 instanceof Person);
console.log(person7.constructor == Person);
console.log(person7.constructor.name);
