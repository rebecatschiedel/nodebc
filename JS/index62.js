const monthNumber = 10;
let monthName = null;
let monthDay = null;

switch (monthNumber) {
    case 1:
        monthName = 'January';
        monthDay = '31 days';
        break;
    case 2:
        monthName = 'February';
        monthDay = '28 days in a common year and 29 days in leap years';
        break;
    case 3:
        monthName = 'March';
        monthDay = '31 days';
        break;
    case 4:
        monthName = 'April';
        monthDay = '30 days';
        break;
    case 5:
        monthName = 'May';
        monthDay = '31 days';
        break;
    case 6:
        monthName = 'June';
        monthDay = '30 days';
        break;
    case 7:
        monthName = 'July';
        monthDay = '31 days';
        break;
    case 8:
        monthName = 'August';
        monthDay = '31 days';
        break;
    case 9:
        monthName = 'September';
        monthDay = '30 days';
        break;
    case 10:
        monthName = 'October';
        monthDay = '31 days';
        break;
    case 11:
        monthName = 'November';
        monthDay = '30 days';
        break;
    case 12:
        monthName = 'December';
        monthDay = '31 days';
        break;
    default:
        console.log('Error. Please select a number between 1 and 12');
        break;
}

if (monthName !== null && monthDay !== null) {
    console.log(`${monthName} is the selected month and has ${monthDay}`);
}