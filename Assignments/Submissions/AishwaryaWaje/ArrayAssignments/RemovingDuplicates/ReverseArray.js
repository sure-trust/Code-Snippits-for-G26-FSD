let numbers = [43, 36, 24, 5, 19];
let j = 0;
let reversed = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed[j] = numbers[i];
  j++;
}
console.log('Reversed Array:', reversed);
