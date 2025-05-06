//Ascending order

//Declare an array of 5 elements
//n is used to store the length of the array
//Using Bubble Sort to sort the array
//outer loop - for i to n
//inner loop - for i to n-2
// if condition - if arr[j] > arr[j+1]
//swap the elements so that the large element is bubbled to end of the array
// print the array.
const arr=[5,3,10,20,7]
 
let n = arr.length

for(let i=0;i<n;i++){
    for(let j=0;j<n-i-i;j++){
        if(arr[j]>arr[j+1]){
           let  temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log('The Array is sorted in ascending order: ',arr);

//Descending Order

//Declare an array of 5 elements
//n is used to store the length of the array
//Using Bubble Sort to sort the array
//outer loop - for i to n
//inner loop - for i to n-2
// if condition - if arr[j] < arr[j+1]
//swap the elements so that the small element is bubbled to end of the array
// print the array.

for(let i=0;i<n;i++){
    for(let j=0;j<n-1-i;j++){
        if(arr[j]<arr[j+1]){
          let  temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log('The Array is sorted in descending order: ',arr);
