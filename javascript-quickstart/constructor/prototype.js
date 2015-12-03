var book = {
  title :'Object oriented Javascript and Node.js'
}

console.log("title" in book);
console.log(book.hasOwnProperty("title"));
console.log("hasOwnProperty" in book);
console.log(book.hasOwnProperty('hasOwnProperty'));

console.log(book instanceof Object );

console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));

console.log(typeof Object);
console.log(typeof Function);
console.log(typeof book);
