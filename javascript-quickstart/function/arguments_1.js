function greeting(){
  var msg = '';
  for(var i = 0 ; i < arguments.length ; i++ )
  {
    msg += arguments[i];
  }
  return msg;
}

console.log(greeting("Hi"));
console.log(greeting("Hi"," My"," name"," is"," kyp"));
console.log(greeting("nice", " to", " meet you"));
