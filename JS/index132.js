const mutants = [
    "Professor X",
    "Cyclops",
    "Iceman",
    "Angel",
    "Beast",
    "Phoenix"
];

mutants.includes("Logan") && mutants.includes("Professor X") && console.log("We love X-Men");
!mutants.includes("Gambit") && console.log("X-Men sucks");