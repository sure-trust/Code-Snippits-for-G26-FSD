// create an array of the 5 numbers

// we need to find the smallest element in the array 

let arr = [2,63,7,2,8];

let min = arr[0];

for(let i = 1;i<arr.length;i++){
    if(min>arr[i]){
        min = arr[i];
    }
}
console.log("The maximum element in the array is "+min);

// now we need to find the largest element in the array 


let max = arr[0];

for(let i =1;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i];

    }
}
console.log("The maximum element which is present in the array is "+max);
// now we want to remove the duplicate elements form the array 

