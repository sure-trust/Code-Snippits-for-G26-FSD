<<<<<<< HEAD
// START  
// SET nums = [1, 2, 3, 2, 4, 5, 1, 6, 4, 1, 2, 3, 4, 1, 1, 1]  
// SET uniqueDigits = []  

// FOR each num in nums DO  
//     IF num is NOT in uniqueDigits THEN  
//         ADD num to uniqueDigits  
//     ENDIF  
// END FOR  

// PRINT uniqueDigits  
// END  






let numbers = [1, 2, 3, 2, 4, 5, 1, 6, 4, 1, 2, 3, 4, 1, 1, 1];
let uniqueDigits = []; 
for (let num of numbers) {
    if (!uniqueDigits.includes(num)) { 
        uniqueDigits.push(num);
    }
}
console.log(uniqueDigits); 
=======
// START  
// SET nums = [1, 2, 3, 2, 4, 5, 1, 6, 4, 1, 2, 3, 4, 1, 1, 1]  
// SET uniqueDigits = []  

// FOR each num in nums DO  
//     IF num is NOT in uniqueDigits THEN  
//         ADD num to uniqueDigits  
//     ENDIF  
// END FOR  

// PRINT uniqueDigits  
// END  






let numbers = [1, 2, 3, 2, 4, 5, 1, 6, 4, 1, 2, 3, 4, 1, 1, 1];
let uniqueDigits = []; 
for (let num of numbers) {
    if (!uniqueDigits.includes(num)) { 
        uniqueDigits.push(num);
    }
}
console.log(uniqueDigits); 
>>>>>>> upstream/main
