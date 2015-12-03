

var numbers = [1,2,3,4,5,6];


Array.prototype.sum = function(){
  return this.reduce(function(p, c){
    return p+c;
  })
  //return eval(numbers.join("+"));
}

var result = numbers.sum();

console.log(result);
console.log(numbers);
