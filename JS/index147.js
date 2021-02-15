let user = {
    username: 'Batman',
    password: 'Alfred1960KPO!'
};

function shouldOpenBatCave(user) {
    if(user.username === "batman" && user.password === "Alfred1960KPO!") {
        return true;
    } else {
        return false;
    }
}

console.log(shouldOpenBatCave(user) ? "Welcome back batman!!" : "Sorry, you can't enter Batcave, try again..");