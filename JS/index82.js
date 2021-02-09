let height = 13;
let i = 0;
let j = height - 1;
let stars = '';
let spaces = '';

let k = 0;
let increase = '';

do {
    increase += '*';
    console.log(increase);
    k++;
} while (k < height);


//to build an inverted ladder
do {
    while (j > i) {
        spaces += ' ';
        j--; 
    };
    
    j = height - 1;
    stars += '*';
    console.log(spaces + stars);
    spaces = '';
    i++;
} while (i < height);

