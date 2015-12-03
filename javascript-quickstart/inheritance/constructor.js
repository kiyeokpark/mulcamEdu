function Rectangle(len, wid)
{
  this.length = len;
  this.width = wid;
}

Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};

Rectangle.prototype.toString = function () {
  return "[Rectangle "+this.length+' x '+this.width+"]";
};

var rect1 = new Rectangle(4,5);

console.log(rect1.toString());
console.log(rect1.getArea());

function Square(size){
  Rectangle.call(this, size, size);
}

/*
Square.prototype.boundary = function ()
{
  return this.length *4;
}
*/
console.log(Object.getOwnPropertyNames(Square.prototype));

Square.prototype = Object.create(Rectangle.prototype,
{ constructor: {value:Square, configurable:true, enumerable:true, writable:true}});
console.log(Object.getOwnPropertyNames(Square.prototype));
var rect2 = new Square(10);
console.log(rect2);

console.log(Object.getOwnPropertyNames(rect2.constructor.prototype));
console.log(rect2.toString());
console.log(rect2.getArea());
