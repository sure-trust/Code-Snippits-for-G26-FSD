let numbers = [43, 36, 24, 5, 19];

let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log('Largest Number:', max);
console.log('Smallest Number:', min);
