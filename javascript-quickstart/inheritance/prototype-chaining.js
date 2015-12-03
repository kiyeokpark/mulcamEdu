"use strict";

var book1 = {
  title:"asdasdqwewqeqwe",
  author:"qqq22"
}

book1.showInfo = function(){
  console.log('%s, %s', this.author, this.title )
}
book1.showInfo();

var book2 = Object.create(book1, {});

book2.showInfo();

console.log( book2 == book1 );
console.log( book2.constructor.prototype.toString() );
console.log( book2.constructor == book1.constructor );
console.log(typeof book1);
console.log(typeof book2);
console.log(Object.getOwnPropertyNames(book1.constructor.prototype));
console.log(Object.getOwnPropertyNames(book2.constructor.prototype));
console.log(Object.getOwnPropertyNames(book1.showInfo));

console.log(book1.constructor.prototype.isPrototypeOf(book2));
console.log(book2.constructor.prototype.isPrototypeOf(book1));
