let students = [
    { name: "Alekhya", marks: 85 },
    { name: "sandhya", marks: 92 },
    { name: "Chandini", marks: 78 },
    { name: "sasi", marks: 90 }
];

// Calculate the average marks
let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);

//  the student with the highest marks
let topStudent = students.reduce((max, student) => (student.marks > max.marks ? student : max), students[0]);
console.log("Top Student:", topStudent.name, "with marks", topStudent.marks);