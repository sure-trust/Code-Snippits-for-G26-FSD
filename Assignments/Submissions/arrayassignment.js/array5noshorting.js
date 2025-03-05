let arr = [105,20,45,36,12]
// now we are going to write a program to sort the numbers

let i = 0;
let j = arr.length-1;
while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
// after sorting the array is
console.log(arr)
// the array which is printed is sorted in ascending order

// now we are going to sort the array in descending order
let k = 0;              
let l = arr.length-1;
while(k<l){
    let temp = arr[k];
    arr[k] = arr[l];
    arr[l] = temp;
    k++;
    l--;
}
// after sorting the array is
console.log(arr)

// to find the maximum and the minimun number in the array 

let max = arr[0];

for(let i =1;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i];
    }
}
console.log("Now the maximum number in the array is "+max);


let min  = arr[0];

for(let i = 1;i<arr.length;i++){
    if(min>arr[i]){
        min = arr[i];
    }
}

console.log("The minimum element in the array is "+min);
