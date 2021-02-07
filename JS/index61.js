const weekdayNumber = 2;

if (weekdayNumber === 1) {
    console.log('Today it\'s Monday');
} else if (weekdayNumber === 2) {
    console.log('Today it\'s Tuesday');
} else if (weekdayNumber === 3) {
    console.log('Today it\'s Wednesday');
} else if (weekdayNumber === 4) {
    console.log('Today it\'s Thursday');
} else if (weekdayNumber === 5) {
    console.log('Today it\'s Friday');
} else if (weekdayNumber === 6) {
    console.log('Today it\'s Saturday');
} else if (weekdayNumber === 7) {
    console.log('Today it\'s Sunday');
} else {
    console.log('Error: Please input a number between 1 and 7.');
};

switch (weekdayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Error');
}

//only the last case does not need a break (default can be used at any point in the switch statement)

let message;

switch (weekdayNumber) {
    default:
        message = 'error';
        break;
    case 1:
        message = 'Monday';    
        break;
    case 2:
        message = 'Tuesday';
        break;
    case 3:
        message = 'Wednesday';
        break;
    case 4:
        message = 'Thursday';
        break;
    case 5:
        message = 'Friday';
        break;
    case 6:
        message = 'Saturday';
        break;
    case 7:
        message = 'Sunday';
        break;
}

console.log(`It\'s me ${message}`);