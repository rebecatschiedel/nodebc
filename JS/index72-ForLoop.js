const height = 13;
let right = '';
let spaces = '';
let left = '';

let secondRight = '';



for (let i = 0; i < height; i++) {
    right += '*';
    for (let j = height - 1; j > i; j--) {
        spaces += ' ';
    };
    console.log(right + spaces + spaces + right);
    spaces = '';
};
console.log();

for (let k = 0; k < height; k++) {
    secondRight += '*';
    for (let l = height - 1; l > k; l--) {
        spaces += ' ';
    };
    for (let m = height; m > k; m--) {
        left += '*';
    };
    console.log(secondRight + spaces + left);
    spaces = '';
    left = '';
};