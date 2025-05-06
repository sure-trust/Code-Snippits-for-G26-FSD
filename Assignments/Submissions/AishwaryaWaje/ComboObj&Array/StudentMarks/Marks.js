let students = [
  { name: 'Amit', marks: 94 },
  { name: 'Sumit', marks: 88 },
  { name: 'Roham', marks: 83 },
  { name: 'Rohit', marks: 96 },
  { name: 'Raj', marks: 79 },
];

let totalMarks = 0;
let topper = students[0];

for (let i = 0; i < students.length; i++) {
  totalMarks += students[i].marks;

  if (students[i].marks > topper.marks) {
    topper = students[i];
  }
}

let averageMarks = totalMarks / students.length;
console.log('Average Marks: ', averageMarks);
console.log(`Top student is ${topper.name} with ${topper.marks} marks.`);
