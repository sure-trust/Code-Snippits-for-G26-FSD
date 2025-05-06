let a = [
    { name: "Vishnu", marks: 85 },
    { name: "Ram", marks: 78 },
    { name: "Suresh", marks: 92 },
    { name: "Naveen", marks: 64 }
]
// for averaging
let totalMarks = 0;
for(let i=0;i<a.length;i++){
    totalMarks += a[i].marks;
}
let avgMarks = totalMarks/a.length;
// for higest marks
let topStudent = a[0];
for(let i=0;i<a.length;i++){
    if (topStudent.marks < a[i].marks) {   
        topStudent = a[i];                  
    }
}
console.log("Average Marks:", avgMarks);
console.log("Top Student:", topStudent.name, "with", topStudent.marks, "marks");



