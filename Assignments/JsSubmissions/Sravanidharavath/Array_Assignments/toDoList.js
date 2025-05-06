let toDoList=[];
toDoList.push("happy", "happer", "happest");//to add items into the array
toDoList.shift();//to remove first item from the array
toDoList.push("sad");
console.log(toDoList);

//sorting array
let arr=[3,4,2,5,1];
console.log("array elements before sorting:",arr);
let asc=[...arr].sort((a,b)=>a-b);
let des=[...arr].sort((a,b)=>b-a);
//finding largest and smallest numbers
let largest=Math.max(...arr);
let smallest=Math.min(...arr);

console.log("Ascending order:",asc);
console.log("Descending order:",des);
console.log("Largest number:",largest);
console.log("Smallest number:",smallest);

//finding largest and smallest numbers without using built-in functions
console.log("finding largest and smallest numbers without using built-in functions");
let num=[10,30,20,50,80];
console.log(num);
let largest1=num[0];
let smallest1=num[0];
for(let i=1;i<num.length;i++)
{
    if(num[i]>largest1)
    {
        largest1=num[i];
    }
    if(num[i]<smallest1)
    {
        smallest1=num[i];
    }
}
console.log("largest number:", largest1);
console.log("smallest number:", smallest1);