let sum = 0;
let count = 0;

for (let number = 0; number <= 1000; number++) {
    if (number % 2 === 0) {
        sum += number;
        count++;
        
        console.log(sum);
        
        if (count === 20) {
            break;
        }
    }
};