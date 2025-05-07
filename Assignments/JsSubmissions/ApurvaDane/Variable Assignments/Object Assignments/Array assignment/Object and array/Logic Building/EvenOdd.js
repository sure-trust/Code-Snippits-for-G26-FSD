let num = [2,5,7,1,4,8,6,0];
let evenCount = num.filter(num => num % 2 === 0).length;
let oddCount = num.filter(num => num % 2 !== 0).length;
console.log("Even Numbers:", evenCount);
console.log("Odd Numbers:", oddCount);