let student=[1,2,3,4,5]
let newArr=[]
for(let i=0;i<student.length;i++){
     newArr[i]=student[student.length-i-1];
}
console.log(newArr);