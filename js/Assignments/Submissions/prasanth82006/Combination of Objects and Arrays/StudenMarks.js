<<<<<<< HEAD

let student=[
     { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "David", marks: 88 }
]
let total_marks=student.reduce((sum,student)=>sum+student.marks,0)
let average=total_marks/student.length;
console.log(average);
=======

let student=[
     { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "David", marks: 88 }
]
let total_marks=student.reduce((sum,student)=>sum+student.marks,0)
let average=total_marks/student.length;
console.log(average);
>>>>>>> upstream/main
