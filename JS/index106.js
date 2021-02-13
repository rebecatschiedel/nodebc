function getUserID() {
    return 50;
}

function isUserValid() {
    return getUserID() > 30 ? true : false;
}

isUserValid() ? console.log('user valid') : console.log('User not valid');