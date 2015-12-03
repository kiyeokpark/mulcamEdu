var person = {};

Object.defineProperty(person, "name", {
  value:'LeeSeongJoo',
  enumerable:true,
  configurable:true,
  writable:true
});

console.log(person);
person.name = 'SJ';
console.log(person);

console.log('--writable = false --');
/*Object.defineProperty(person, "name", {
  writable:false
});
*/
console.log(person);
person.name = 'KYP';
console.log(person);

Object.defineProperty(person, "email", {
  value:'seongjoo@codebasic.co',
  enumerable:true,
  configurable:true,
  writable:true
});
console.log(person);
person.email = 'kiyeokpark@mmm.mmm';
console.log(person);

// 전/후자는 동일한 결과를 도출
/*
Object.defineProperty(person,'_birthdate',
{value:'19831116'});

Object.defineProperty(person,'birthdate',{
  enumerable:true,
  get:function(){return this._birthdate;}
});*/
Object.defineProperties(person,
{
  _birthdate:{
    value:'19831116'
  },
  birthdate:{
    enumerable:true,
    get:function(){return this._birthdate;}
  }
});
console.log(person.birthdate);
person.birthdate = '19831212';
console.log(person.birthdate);
delete person.birthdate;
console.log(person);
