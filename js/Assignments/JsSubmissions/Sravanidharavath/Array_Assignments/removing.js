console.log("removing duplicates from an array");
let arr=[5,4,8,2,3,1,3,4,8,2,7,9];
let notduplicate=[...new Set(arr)];
console.log("array after removing the duplicate elements:", notduplicate);
let reversedArray=notduplicate.reverse();
console.log("reversed array is:",reversedArray);

console.log("reversing the array without using the built-in methos");
let string=["apple","babana","custeredApple","dates"];
console.log("array before reversing",string);
let reversedArray1=[];
for(let i=string.length-1;i>=0;i--)
{
    reversedArray1.push(string[i]);
}
console.log("reversed array is:", reversedArray1);