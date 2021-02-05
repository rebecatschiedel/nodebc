let playerName = 'Patrick Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';

let team = teams.slice(46, 50)

let teamCapitalized = team.charAt(0).toUpperCase() + team.slice(1);

let player = playerName.slice(-8, -5);
let playerCapitalized = playerName.slice(0, -8).toUpperCase() + player;

console.log(`${playerCapitalized} ${message.slice(12, 20)} ${teamCapitalized} player${message.slice(-13, -9)} ${teamCapitalized}!!`);