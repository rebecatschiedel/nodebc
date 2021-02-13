function biggerNumber(firstNumber, secondNumber) {
    if(typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number') {
        console.log("Error, parameters are not number type");
        return;
    }

    
    if(firstNumber > secondNumber) {
        console.log(`${firstNumber} is bigger than ${secondNumber}`);
    } else if(firstNumber < secondNumber ) {
        console.log(`${secondNumber} is bigger than ${firstNumber}`);
    } else {
        console.log(`Both numbers are ${firstNumber}`);
    }
}

biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);
biggerNumber('2',2);
biggerNumber(2,'2');
