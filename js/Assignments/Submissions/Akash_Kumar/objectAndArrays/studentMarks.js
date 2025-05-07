// Student Marks

// Create an array of objects, where each object contains a student’s name and marks.
// Calculate the average marks of all students.
// Print the student with the highest marks.

const students =[
    {
        name: "Akash",
        marks: 80
    },
    {
        name: "Aryan",
        marks: 20
    },
    {
        name: "Raga",
        marks: 40
    },
    {
        name: "Praja",
        marks: 85
    },
    {
        name: "Surbhi",
        marks: 90
    }
]
// console.log(students.length);
let totalMarks = 0;
for (let i = 0 ; i < students.length; i++){
    totalMarks += students[i].marks
}
console.log("Total marks = " +totalMarks);
console.log("Strength of the students :" +students.length);
console.log("Average marks: " + totalMarks/students.length);