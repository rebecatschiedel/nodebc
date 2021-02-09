const height = 13;
let stars = '';

// the first for loop is responsible for the vertical lines
for (let i = 0; i < height; i++) {
    
    // the second for loop is responsible for the horizontal lines
    for (let j = height; j > i; j--) {
        stars += '*';
    };
   
    console.log(stars);

    // it is necessary to restart the string to the initial value after every line
    stars = '';
};