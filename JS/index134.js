const numbers = [];

let i = 1;
while(i <= 1000) {
    numbers.push(i);
    i++;
}

let sum = 0;

const final = numbers.reduce((accumulator, number) => {
    sum = accumulator + number;
    console.log(sum);
    return sum;
});

console.log(final === 500500 ? "Good Job!" : "Take a look to see if something is wrong");