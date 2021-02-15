let numbers = [];

for (let i = 1; numbers.length < 1000; i++) {
    numbers.push(i)
};

const numbersIncremented = numbers.map((number, index) => {
    console.log(`index: ${index + 1}, original number: ${number}, incremented value: ${number + 10}`);
    //to create a new array, we need to return something
    return number += 10;    
});

console.log(numbers);
console.log(numbersIncremented);

