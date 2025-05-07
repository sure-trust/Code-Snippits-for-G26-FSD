// Grade Assignment

// Create an object grades where keys are student names, and values are their marks.
// Update the marks of a student, delete one student's record, and print the updated object.

const grades = {
    Rajesh: 100,
    Sejal:200,
    Rathi:150,
    Prathar:57
}

// updating the marks of a student
grades.Rathi = 250;

// Deleteing a student's record
delete grades.Prathar;

console.log(grades);