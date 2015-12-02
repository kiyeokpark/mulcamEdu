var people = {
  name:"이성주",
  sayName: function(){
    console.log(this.name + "입니다");
  }
}

people.sayName();

var person = people;
person.name = "박기역";

people.sayName();
person.sayName();
