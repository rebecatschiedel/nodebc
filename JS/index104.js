let fibonacci = function () {
    let number = 1;
    let previousNumber = 0;
    let result = 0;

    for (let i = 0; i < 8; i++) {
        if (result === 0) {
            console.log(previousNumber);
            result = previousNumber + number;
            console.log(result);
        };

        console.log(result);
        
        previousNumber = number;
        number = result;
        result = previousNumber + number;

    };
    
};

fibonacci();
fibonacci();
fibonacci();