let students=[
    {name:"Nareshn Nayak", marks:100},
    {name:"Sravani Dharavath", marks:90},
    {name:"Pavani Dharavath", marks:99}
];
let totalMarks=0;
students.forEach(student=>
{
    totalMarks=totalMarks+student.marks;
});
let averageMarks=totalMarks/students.length;
let highestMarks=students.reduce((max, student)=>{
    return (student.marks>max.marks)? student:max;
},
students[0]);
console.log("average marks:",averageMarks);
console.log("student with highest marks are:",highestMarks.name, "with", highestMarks.marks, "marks");
