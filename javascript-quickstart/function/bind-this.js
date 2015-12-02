function sayName(label, greeting)
{
  console.log(greeting);
  console.log(label + " : " + this.name);
};

var person1 = {
  name:"박기역"
};

var person2 = {
  name : "James"
};


var sayPerson1Name = sayName.bind(person1);
var sayPerson2Name = sayName.bind(person2);

sayPerson1Name("Person1", "안녕하세요");
sayPerson2Name("Person2", "Hello");
