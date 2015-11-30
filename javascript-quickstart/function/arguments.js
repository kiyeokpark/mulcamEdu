function sum(){
  console.log("sum()");
  var total = 0;
  for( var i = 0; i < arguments.length ; i++ )
  {
    total += arguments[i];
  }
  return total;
}


result = sum (1,2,3,4,5,6,7,8,9,10);
console.log(result);

function product(x,y,z){
  var result = 1;
  result = x * y* z;
  for( var i = 3 ; i < arguments.length ; i++ )
    result *= arguments[i];

  return result;
}

result = product (1,2,3);
console.log(result);
result = product (1,2,3,4,5,6,7,8,9,10);
console.log(result);
console.log(product(1,2));
