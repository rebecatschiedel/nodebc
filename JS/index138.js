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

mutants.forEach((mutant, index) => {
    if (mutant === 'Professor X') {
        mutants[index] = '<3 ' + mutant;
    }
});

const updatedMutants = mutants.map(mutant => {
    if (mutant === 'Logan' || mutant === 'Phoenix' || mutant === 'Gambit') {
        return '<3 ' + mutant;
    }
    return mutant;
});

console.log(mutants);
console.log(updatedMutants);

const mutantsTargeted = ['Professor X', 'Logan', 'Phoenix', 'Gambit'];

let changedMutants = [];

mutants.forEach((mutant) => {
    mutantsTargeted.includes(mutant) ? changedMutants.push('<3 ' + mutant) : changedMutants.push(mutant);
});

console.log(mutants);
console.log(changedMutants);