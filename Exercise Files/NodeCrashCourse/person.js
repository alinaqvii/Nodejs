// const person = {
//     name: 'Ali Naqvi',
//     age: 29
// };

class Person {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and i am ${this.age} years old`)
    }
}

module.exports = Person;