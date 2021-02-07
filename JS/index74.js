const height = 13;
let i = 1;
let stars = '';

while (i <= height) {
    
    if (i % 2 !== 0) {
        stars += '*';
        console.log(stars);
    } else {
        stars += '*';
    }

    i++;
};