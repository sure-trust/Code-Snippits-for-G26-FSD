// START  
// DECLARE students as a list of objects (name, marks)  
// DECLARE totalMarks as 0  
// DECLARE highestStudent as first student in the list  
// FOR each student in students  
//     ADD student.marks to totalMarks  
//     IF student.marks > highestStudent.marks  
//         UPDATE highestStudent with current student  
// CALCULATE averageMarks as totalMarks divided by number of students  
// PRINT "Average Marks:", averageMarks  
// PRINT "Top Student:", highestStudent.name, "with", highestStudent.marks, "marks"  
// END  





let students = [
    { name: "Affu", marks: 85 },
    { name: "Bhavya", marks: 92 },
    { name: "Charitha", marks: 78 },
    { name: "Vaishu", marks: 88 },
    { name: "Anjali", marks: 95 }
];
let totalMarks = 0;
let highestStudent = students[0];
for (let student of students) {
    totalMarks += student.marks;
    if (student.marks > highestStudent.marks) {
        highestStudent = student;
    }
}
let averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);
console.log("Top Student:", highestStudent.name, "with", highestStudent.marks, "marks");

