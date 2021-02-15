let tripExpenses = [150, 70, 50];

const budget = tripExpenses.reduce((accumulator, expense) => accumulator += expense);

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);
console.log('total trip budget:', budget);