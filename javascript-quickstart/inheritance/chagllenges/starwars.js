function Person(surname, name){
  this.surname = surname;
  this.name = name;
  this.force = 0;
  if( arguments[2] )
    this.force = arguments[2];
}

function Jedi(surname, name, force){
  Person.call(this, surname, name, force );
  this.typeForce = '';
}

Jedi.prototype = Object.create(Person.prototype,{
constructor: {value:Jedi, configurable:true, enumerable:true, writable:true}});

Jedi.prototype.showForceGauge = function()
{
  console.log("### Force : "+this.force);
}

Jedi.prototype.useForce = function(whom, force){
  if( this.force >= force ){
    console.log("### %s이/가 %s에게 %s 포스 %d을/를 사용합니다.", this.name, whom.name, this.typeForce, force );
    this.force -= force;
  }
  else {
    console.log("### 포스가 부족합니다.");
  }
  this.showForceGauge();
}


function DarkJedi(surname, name, force){
  Jedi.call(this, surname, name, force);
    this.typeForce = '사악한';
}

DarkJedi.prototype = Object.create(Jedi.prototype,{
constructor: {value:DarkJedi, configurable:true, enumerable:true, writable:true}});

DarkJedi.prototype.useDeception = function(whom){
  if( this.force > whom.force )
    console.log("### %s이/가 %s의 정신을 혼미하게 만듭니다.", this.name, whom.name );
  else {
    console.log("### 포스가 약한 사람에게만 통합니다.");
  }
}

Jedi.prototype.useMindTrick = function(whom){
  if( this.force > whom.force )
    console.log("### %s이/가 %s을/를 마음대로 조종합니다.", this.name, whom.name );
  else {
    console.log("### 포스가 약한 사람에게만 통합니다.");
  }
}

var 오비완 = new Jedi('캐노비', '오비완', 2000);
var 다스베이더 = new DarkJedi('스카이워커', '아나킨', 10000);
var 이성주 = new Person('이', '성주')

오비완.showForceGauge();
// 출력 : 포스 : 2000
오비완.useForce(다스베이더, 100);
//출력 : 다스베이더에게 포스 100을 사용합니다.
오비완.useForce(다스베이더, 10000);
//출력 : 다스베이더에게 포스 10000을 사용합니다.
오비완.useMindTrick(이성주);
//출력 : 이성주를 마음대로 조종합니다.
오비완.useMindTrick(다스베이더);
//출력 : 포스가 약한 사람에게만 통합니다.

다스베이더.showForceGauge();
// 출력 : 포스 : 10000
다스베이더.useForce(이성주, 10);
// 출력 : 이성주에게 사악한 포스 10을 사용합니다.
다스베이더.useDeception(이성주);
// 출력 : 성주의 정신을 혼미하게 만듭니다.
