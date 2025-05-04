<<<<<<< HEAD
// Grade Assignment
// Create an object grades where keys are student names, and values are their marks.
//  Update the marks of a student, delete one student's record, and print the updated object.

let Grade={
    Nandu:100,
    Akhila:60,
    Sudha:70,
};
console.log("Before performing operations: ",Grade)
Grade.Sudha=40
console.log(`Updated marks for sudha :${Grade.Sudha}`)
 
delete Grade.Akhila;
=======
// Grade Assignment
// Create an object grades where keys are student names, and values are their marks.
//  Update the marks of a student, delete one student's record, and print the updated object.

let Grade={
    Nandu:100,
    Akhila:60,
    Sudha:70,
};
console.log("Before performing operations: ",Grade)
Grade.Sudha=40
console.log(`Updated marks for sudha :${Grade.Sudha}`)
 
delete Grade.Akhila;
>>>>>>> upstream/main
console.log("Updated Grades: ",Grade)