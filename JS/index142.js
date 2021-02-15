let firstPerson = ['Harry', 'Potter', 'under the stairs', 11];
let secondPerson = ['Hermione', 'Granger', 'Somewhere', 11];

const person1 = firstPerson.reduce((accumulator, person) => accumulator = accumulator + ' ' + person);
const person2 = firstPerson.reduce((accumulator, person) => accumulator = accumulator + ' ' + person);
const person3 = secondPerson.reduce((accumulator, person) => accumulator = accumulator + ' ' + person);

person1 === person2 ? console.log('They are the same person') : console.log('They are not the same person');

console.log(person1);
console.log(person2);

person1 === person3 ? console.log('They are the same person') : console.log('They are not the same person');

console.log(person1);
console.log(person3);
