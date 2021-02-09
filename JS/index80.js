let number = 0;
let result = 0;

do {
    if (number % 2 !== 0) {
        result += number;
        console.log(result);
    }
    number++;
} while (number < 1001);