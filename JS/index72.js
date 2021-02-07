let height = 13;
let i = 0;
let j = height - 1;
let stars = '';
let spaces = '';

let k = 0;
let increase = '';

while (k < height) {
    increase += '*';
    console.log(increase);
    k++;
}


//to build an inverted ladder
while (i < height) {
    while (j > i) {
        spaces += ' ';
        j--; 
    }
    j = height - 1;
    stars += '*';
    console.log(spaces + stars);
    spaces = '';
    i++;
};

