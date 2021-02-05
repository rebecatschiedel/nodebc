let text = 'HELLO';
let result = '';
let result2 = '';

for (let i = 1; i <= text.length; i++) {
    result = result.concat(text.charAt(text.length - i))
};

for (let i = text.length - 1; i >= 0; i--) {
    result2 += text[i];
};

console.log('the final result is:', result.toLowerCase());

console.log(result2);
