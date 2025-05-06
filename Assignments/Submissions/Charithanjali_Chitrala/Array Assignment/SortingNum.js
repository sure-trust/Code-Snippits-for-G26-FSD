// START  
// SET nums = [29, 6, 19, 12, 23, 25]  

// SET sortedNums = COPY of nums  
// SORT sortedNums in ascending order  

// PRINT "Original Array:", nums  
// PRINT "Sorted Array:", sortedNums  
// END  




let nums = [29, 6, 19, 12, 23, 25];
let sortedNums = nums.slice().sort((a, b) => a - b);
console.log("Original Array:", nums);
console.log("Sorted Array:", sortedNums);
