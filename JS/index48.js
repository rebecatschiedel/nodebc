let message = "3.14 it's a great number but 42 is the answer to life.";

let pi = parseFloat(message.substr(0, 4));
let answerToLife = parseInt(message.substr(29, 2));

let result = pi + answerToLife;

console.log('pi', pi);
console.log('ananswerToLife', answerToLife);
console.log('result', result);

console.log(`${result.toString()} is the result of adding pi and answerToLife`);

