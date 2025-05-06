let student=[1,2,3,4,4,5,6,1,1]
let unique=[];
for(let i of student){
     if(!unique.includes(i)){
          unique.push(i);
     }
}
console.log(` The Array after removing the duplicates : ${unique}`);