let numbers = [43, 36, 24, 5, 19];

for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log('Ascending Order: ', numbers);

let j = 0;
let reversed = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed[j] = numbers[i];
  j++;
}
console.log('Descending Order:', reversed);

console.log('Largest Number:', reversed[0]);
console.log('Smallest Number:', numbers[0]);
