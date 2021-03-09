const isEven = require("./numbers");
const Logger = require("logplease");
const logger = Logger.create("utils");

const numbers = [2, 3, 101, 201, 202, 100];

numbers.forEach(number => {
    if(isEven(number)) {
        logger.info(`${number} is even`);
    } else {
        logger.error(`${number} is odd`)
    }
});
