// Sorting
let student=[3,2,1,8,12,9]
for(let i=0;i<student.length;i++){
     for(let j=i+1;j<student.length;j++){
          if(student[i]>student[j]){
               let temp=student[i];
               student[i]=student[j];
               student[j]=temp;
          }
     }
}
console.log(`The Ascending order ${student}`);
for(let i=0;i<student.length;i++){
     for(let j=i+1;j<student.length;j++){
          if(student[i]<student[j]){
               let temp=student[i];
               student[i]=student[j];
               student[j]=temp;
          }
     }
}
console.log(`The Descending order ${student}`);
let largest=Math.max(...student)
let min=Math.min(...student)
console.log(`The Maximum Element is: ${largest}`);
console.log(`The Minimum Element is: ${min}`);

