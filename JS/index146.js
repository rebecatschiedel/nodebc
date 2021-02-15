let user = {
    username: 'batman',
    password: 'Alfred1960KPO!'
};

function shouldOpenBatCave(username, password) {
    if(username === "batman" && password === "Alfred1960KPO!") {
        return true;
    } else {
        return false;
    }
}

console.log(shouldOpenBatCave(user.username, user.password) ? "Welcome back batman!!" : "Sorry, you can't enter Batcave, try again..");