let height = 13;
let stars = '';
let spaces = '';

let increase = '';

for (let k = 0; k < height; k++) {
    increase += '*';
    console.log(increase);
};


//to build an inverted ladder
for (let i = 0; i < height; i++) {
    for (let j = height - 1; j > i; j--) {
        spaces += ' ';
    };
    
    j = height - 1;
    stars += '*';
    console.log(spaces + stars);
    spaces = '';
};

