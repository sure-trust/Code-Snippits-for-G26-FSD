//Using for loop we can traverse reverse of an array and also push the array elements into the new array.
//print the reveresed array.
arr = ['Rose','Hibiscus','Jasmine','Lily','Sunflower']
let rev_arr = []
for(let i=arr.length-1;i>=0;i--){
    rev_arr.push(arr[i])
}
console.log("The original array: ",arr);
console.log("The Revered array: ",rev_arr);