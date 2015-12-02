function sayName(label, greeting)
{
  console.log(greeting);
  console.log(label + " : " + this.name);
}

var person1 = {
  name:"박기역"
};

var person2 = {
  name : "James"
};

var args = [ "person1", "안녕하세요."];

sayName.apply(person1,args);
sayName.apply(person2, ["person2", "Hello."]);
