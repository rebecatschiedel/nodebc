let mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
];

let names = '';

mutants.forEach(mutant => {
    if (mutant === 'Iceman'|| mutant === 'Logan' || mutant === 'Phoenix') {
        names = names + ' ' + mutant;
    };
});

console.log(names);