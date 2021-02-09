const height = 13;
let i = 1;
let stars = '';

do {
    
    if (i % 2 !== 0) {
        stars += '*';
        console.log(stars);
    } else {
        stars += '*';
    }

    i++;
} while (i <= height);