const mutants = [
    "Professor X",
    "Cyclops",
    "Iceman",
    "Angel",
    "Magneto",
    "Beast",
    "Phoenix",
    "Logan",
    "Gambit"
];


for(let i = 0; i < mutants.length; i++) {
    if(mutants[i] === "Magneto") break;
    console.log(mutants[i]);
}


mutants.splice(mutants.indexOf("Magneto"), 1);

for(let i = 0; i < mutants.length; i++) {
    console.log(mutants[i].toUpperCase(), mutants.indexOf(mutants[i]));
}