const greeter = require('./greeter');

const callbackFunction = () => {
    console.log("We're using node modules, yeah!");
};

greeter('Oda', 'Nabunaga', callbackFunction);