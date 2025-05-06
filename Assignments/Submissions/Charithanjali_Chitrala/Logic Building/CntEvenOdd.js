// START
// DEFINE numbers as an array with 10 random values
// SET evenCount = 0
// SET oddCount = 0
// FOR EACH num IN numbers DO:
//     IF num MOD 2 EQUALS 0 THEN
//         INCREMENT evenCount
//     ELSE
//         INCREMENT oddCount
//     ENDIF
// ENDFOR
// PRINT "Even numbers count:", evenCount
// PRINT "Odd numbers count:", oddCount
// END




let numbers = [12, 7, 18, 9, 25, 30, 41, 50, 67, 88]; 
let evenCount = 0;
let oddCount = 0;
for (let num of numbers) {
    if (num % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);
