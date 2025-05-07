// Student Marks
const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "David", marks: 95 },
    { name: "Eve", marks: 88 }
];

// Calculate average marks
const averageMarks = students.reduce((sum, student) => sum + student.marks, 0) / students.length;

// Find student with highest marks
const topStudent = students.reduce((highest, current) => 
    current.marks > highest.marks ? current : highest
);

console.log("Average marks:", averageMarks.toFixed(2));
console.log("Top student:", topStudent); 