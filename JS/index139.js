let numbers = [];

for (let i = 1000; i > 0; i--) {
    numbers.push(i)
};

const evenNumbers = numbers.filter(number => number % 2 === 0 && number);
const oddNumbers = numbers.filter(number => !(number % 2 === 0) && number);

console.log(numbers);

for (let i = oddNumbers.length-1; i > oddNumbers.length - 11; i--) {
    console.log(oddNumbers[i]);
};

for (let i = 0; i < 20; i++) {
    console.log(evenNumbers[i], i);
};
