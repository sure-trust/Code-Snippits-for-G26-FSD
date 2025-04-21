
let students = [
    { name: "A", marks: 99 },
    { name: "B", marks: 94 },
    { name: "C", marks: 85 },
    { name: "D", marks: 72 },
    { name: "E", marks: 92 }
  ];
  
  // average marks
  let totalMarks = 0;
  let toppers = students[0];
  
  for (let student of students) {
    totalMarks += student.marks;
    if (student.marks > toppers.marks) {
      toppers = student;
    }
  }
  
  let averageMarks = totalMarks / students.length;
  
  
  console.log("Average Marks of All Students:", averageMarks);
  console.log("Student with Highest Marks:", toppers.name, " Marks:", toppers.marks);
  