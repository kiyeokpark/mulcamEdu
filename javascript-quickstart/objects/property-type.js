var person = {
  _name:"박기역",
  get name(){
    return this._name+" 입니다";
  },
  set name(value){
    this._name = value;
    console.log('새 이름 : ' +this._name);
  }
}

console.log(person.name);

person.name="김성주";
console.log(person.name);

console.log(person._name);
console.log(person.propertyIsEnumerable("_name"));
Object.defineProperty(person, "_name",{enumerable: false});
  console.log(person._name);
  person._name="aaa";
  person.name ="abc";
  console.log(person._name);
console.log(person.propertyIsEnumerable("_name"));
