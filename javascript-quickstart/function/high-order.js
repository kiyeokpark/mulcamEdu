var numbers = [1,5,8,4,7,10,2,6];
numbers.sort();
console.log(numbers);

var rule = function (first, second){
  return first > second;
}

numbers.sort(rule);
console.log(numbers);
