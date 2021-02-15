const femaleStudents = [
    "Elsa", 
    "Anna", 
    "Celeste", 
    "Bianca", 
    "Dory"
];

const maleStudents = [
    "Olaf",
    "Fivel",
    "Bidu",
    "Bernard",
    "Nemo"
];

const students = femaleStudents.concat(maleStudents);
students.sort();

console.log(students[0], students[2], students[4], students[5], students[6]);

let count = 0
while(count < students.length) {
    if(maleStudents.includes(students[count]))
    console.log(students[count]);
    count++;
}

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}