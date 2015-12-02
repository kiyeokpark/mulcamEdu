var person = {
  name:'이성주',
  weight:85
};

function showInfo(person)
{
for( var key in person){
  console.log(key + ":" +person[key]);
}
}

showInfo(person);

Object.defineProperty(person, "weight", {enumerable: false});

showInfo(person);

Object.defineProperty(person, "name", {configurable: false});

delete person.name;

showInfo(person);

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature;
arc.temperature = 11;
arc.temperature = 13;
arc.temperature; 
