let result = 0;

for (number = 0; number < 1001; number++) {
    if (number % 2 !== 0) {
        result += number;
        console.log(result);
    }
};