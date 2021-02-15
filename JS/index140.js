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

const filtered = mutants.filter(mutant => mutant !== 'Magneto' && mutant !== 'Iceman' && mutant !== 'Gambit' && mutant);

console.log(mutants);
console.log(filtered);