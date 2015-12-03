var person = {
  name : "이성주"
}

var descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);
