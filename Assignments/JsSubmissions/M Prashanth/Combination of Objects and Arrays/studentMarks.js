
let students = [
    { name: "Prashanth", marks: 80 },
    { name: "Anand", marks: 75 },
    { name: "Uday", marks: 90 },
    { name: "Anil", marks: 85 }
];
average = 0;
students.forEach(student => {
    average += student.marks;
});
average = average / students.length;
console.log("Average marks:", average);
let highestMarks = students[0].marks;
let studentName = students[0].name;
for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highestMarks) {
        highestMarks = students[i].marks;
        studentName = students[i].name;
    }
}
console.log("Student with highest marks:", studentName);
console.log("Highest marks:", highestMarks);
