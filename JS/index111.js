function even(num) {
    if (num % 2 === 0) return true;
    return false;
}

const numbers = [2, 5, 3, 24, 12];

numbers.forEach(number => {
    even(number) ? console.log(`${number} is even`) : console.log(`${number} is odd`);    
});