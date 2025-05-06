const numbers = [12, 45, 23, 78, 56, 89, 34, 67, 90, 33];
let evenCount = 0, oddCount = 0;
for (let num of numbers) {
    if (num % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);
