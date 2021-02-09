let fibonacci = 0;
let f0 = 0;
let f1 = 1;

//count needs to be eight because you console.log 3 numbers when count = 0;
for (count = 0; count < 8; count++) {

    if (fibonacci === 0) {
        console.log(fibonacci);
        fibonacci += f1;
        console.log(fibonacci);
    }
    fibonacci = f0 + f1;
    f0 = f1;
    f1 = fibonacci;
    console.log(fibonacci);
};