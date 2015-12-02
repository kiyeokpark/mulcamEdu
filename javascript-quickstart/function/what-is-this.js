function sayName(){
  console.log(this.name);
}

var person1 = {
  name:"이성주",
  sayMyName : sayName
}

var person2 = {
  name:"박기역",
  sayMyName : sayName
}

name = "node.js";

sayName();
person1.sayMyName();
person2.sayMyName();

var person3 ={
  name:"기역, 박"
};

sayName.call(this);
sayName.call(person3);
