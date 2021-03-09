const greet = (firstName, lastName, callback) => {
    console.log(`Hi ${firstName} ${lastName}`);

    if(callback && typeof callback === "function") callback();
};

const anotherFunction = () => {
    console.log('This code gets executed after the greet function call');
}

module.exports = greet;