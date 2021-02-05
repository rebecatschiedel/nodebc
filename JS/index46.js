let userAndPassword = 'pepito2017,12345';
let username = userAndPassword.substr(0, 10);
let password = userAndPassword.substr(11, 5);

console.log(`the user ${username} had ${password} as password`);