function showNumbers(start, end) {
    if (typeof(start) !== 'number' || typeof(end) !== 'number') {
        console.log('Parameter is not a valid number');
        return false;
    }

    if (start > end) {
        while (start >= end) {
            console.log(start--);
        }
    } else if (start === end) {
        console.log(`The numbers are equal`);
        return false;
    } else {
        while (start <= end) {
            console.log(start++);
        }
    }
};

showNumbers(0, 1000);
showNumbers(1000, 0);
showNumbers(100, 100);
showNumbers("100", 300);