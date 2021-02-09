const height = 13;
let i = 0;
let j = height;
let stars = '';

// the first while loop is responsible for the vertical lines
do {
    
    // the second while loop is responsible for the horizontal lines
    while (j > i) {
        stars += '*';
        j--;
    };

    
    console.log(stars);

    // it is necessary to restart the string and the 'j' to the initial value after every line
    stars = '';
    j = height;

    i ++;
} while (i < height);