const path = require('path');

// Base File name
console.log(path.basename(__filename));

// Directory Name
console.log(path.basename(__dirname));

// File Extension
console.log(path.extname(__filename));
// Create path object
console.log(path.basename(__filename).base);

//To require external files in JS
const Person = require('./person');




//To Print in JS
// console.log(person);
// console.log(person.name)


const person1 = new Person('Ali Naqvi', 29);


person1.greeting();
//Base file name
console.log(__filename);