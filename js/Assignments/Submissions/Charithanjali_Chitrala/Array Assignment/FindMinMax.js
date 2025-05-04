<<<<<<< HEAD
// START  
// SET arr = [42, 7, 19, 88, 33]  
// SET largest = arr[0]  
// SET smallest = arr[0]  

// FOR i FROM 1 TO length(arr) - 1 DO  
//     IF arr[i] > largest THEN  
//         largest = arr[i]  
//     ENDIF  
//     IF arr[i] < smallest THEN  
//         smallest = arr[i]  
//     ENDIF  
// END FOR  

// PRINT "Largest Number:", largest  
// PRINT "Smallest Number:", smallest  
// END  




let arr = [42, 7, 19, 88, 33];
let largest = arr[0];
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);
=======
// START  
// SET arr = [42, 7, 19, 88, 33]  
// SET largest = arr[0]  
// SET smallest = arr[0]  

// FOR i FROM 1 TO length(arr) - 1 DO  
//     IF arr[i] > largest THEN  
//         largest = arr[i]  
//     ENDIF  
//     IF arr[i] < smallest THEN  
//         smallest = arr[i]  
//     ENDIF  
// END FOR  

// PRINT "Largest Number:", largest  
// PRINT "Smallest Number:", smallest  
// END  




let arr = [42, 7, 19, 88, 33];
let largest = arr[0];
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);
>>>>>>> upstream/main
