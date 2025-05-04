<<<<<<< HEAD
let arr = [2,5,4,20,5]
let large=arr[0];
let small=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        large=arr[i]
    }
    if(arr[i]<small)
        small=arr[i]
}
console.log("The largest element: " ,large);
=======
let arr = [2,5,4,20,5]
let large=arr[0];
let small=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        large=arr[i]
    }
    if(arr[i]<small)
        small=arr[i]
}
console.log("The largest element: " ,large);
>>>>>>> upstream/main
console.log("The smallest element: " ,small);