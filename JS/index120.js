let students = [];

students[0] = 'Canim';
students[1] = 'Askim';
students[2] = 'Sevgilim';
students[3] = 'Tatlim';
students[4] = 'Bir Tanem';
students[5] = 'Her Seyim';

students.forEach(student => console.log(`index ${students.indexOf(student)}: ${student}`));