let numbers = [54, 29, 67, 84, 36, 2, 95, 73, 11, 47];
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log('Even Count: ', evenCount);
console.log('Odd Count: ', oddCount);
