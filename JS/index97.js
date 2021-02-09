for (let number = 10000; number >= 0; number--) {
    if (number % 10 === 0 && number !== 0 && number !== 10000) {
        console.log(`** ${number} **`);
    } else {
        console.log(number);
    }
};