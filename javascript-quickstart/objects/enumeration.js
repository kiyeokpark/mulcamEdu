var obj = {x:1, y:2};

var properties = Object.keys(obj);

for( var property in obj )
{
  console.log("Key : "+property);
  console.log("Values : "+obj[property]);
}

for( var i = 0 ; i < properties.length ; i++){
  console.log("Key : "+properties[i]);
  console.log("Values : "+obj[properties[i]]);
}

// for-in 은 객체의 속성을 탐색할 때만 사용
// 항목을 꺼낼 때 사용하는 것은 부작용이 있을 수 있다.
var array=[1,3,5,7];
for( var item in array) //--> Index가 나온다!!
{
  console.log(item + 1);
}

console.log(obj.propertyIsEnumerable("x"));
console.log(obj.hasOwnProperty("x"));

var properties = Object.keys(obj);
console.log(properties.length);
console.log(properties.propertyIsEnumerable("length"));
console.log(properties.hasOwnProperty("length"));
