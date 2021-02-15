let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
};

console.log(user.username, user.password);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

user.username = capitalizeFirstLetter(user.username);

user.password = user.password.replace('1960', " ");

console.log(user.username, user.password);
