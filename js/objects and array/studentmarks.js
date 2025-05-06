//Student Marks
// create a student objects with name and marks properties
//assign total marks with 0 assuming that no marks is available 
//initalize i with 0 ,check it is lessthan the length of student and increment it by 1
//add totalmarks with student marks till the loop end
//calculating the average marks of student by performing totalmarks by length of students
// To get the topstudent,Assume first student is the top scorer
//for loop is initalized with 1 ,checks till the length of student and increment by 1
//check if i marks are  greater than topstudentmarks then assign i value  to topstudent
//print average marks
//print topstudent name and marks
let students = [
    { name: "siri", marks: 95 },
    { name: "ammu", marks: 78 },
    { name: "sai", marks: 92 },
    { name: "malli", marks: 88 },
    { name: "gayi", marks: 91 }
];

let totalMarks = 0;
for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
}

let averageMarks = totalMarks / students.length;

let topStudent = students[0]; 
for (let i = 1; i < students.length; i++) {
    if (students[i].marks > topStudent.marks) {
        topStudent = students[i];
    }
}


console.log( averageMarks);
console.log( topStudent.name);
console.log(topStudent.marks);
