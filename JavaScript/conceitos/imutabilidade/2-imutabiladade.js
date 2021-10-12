const students = [
    {
        name: 'Cleber',
        grade: 6
    },
    {
        name: 'Katia',
        grade: 9 
    },
    {
        name: 'Carlos',
        grade: 10
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(students => students.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);