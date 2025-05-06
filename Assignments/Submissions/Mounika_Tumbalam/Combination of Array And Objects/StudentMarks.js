let students = [
    {name:"Mounika" , marks:95},
    {name:"Meghana" , marks:92},
    {name:"Affifa",marks:90},
    {name:"charitha",marks:70}

];
let total = 0;
let high = students[0];
for(let i =0;i<students.length;i++){
    total += students[i].marks;
   
if(students[i].marks>high.marks){
    high=students[i];
}
}
let avg = total/students.length;

console.log('Average Marks: ',avg);
console.log(`${high.name} is scored high marks ${high.marks}`);
