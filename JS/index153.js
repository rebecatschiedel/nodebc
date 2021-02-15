const arithmetic = {
    add: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            console.log('error');
        } else {
            console.log(num1 + num2);
        }
    },
    subtract: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            console.log('error');
        } else {
            console.log(num1 - num2);
        }
    },
    multiply: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            console.log('error');
        } else {
            console.log(num1 * num2);
        }
    },
    divide: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            console.log('error');
        } else {
            console.log(num1 / num2);
        }
    },
    remainder: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            console.log('error');
        } else {
            console.log(num1 % num2);
        }
    }
};

arithmetic.add(2, 10);
arithmetic.subtract(10, 5);
arithmetic.multiply(3, 100);
arithmetic.divide(40, 2);
arithmetic.remainder(20, 2);