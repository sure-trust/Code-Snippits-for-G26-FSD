
let num = [1,7,34,25,16];

let smallest = num[0];
let largest = num[0];

for (let i = 0; i < num.length; i++) {
  if (num[i] < smallest) {
    smallest = num[i];
  }
  if (num[i] > largest) {
    largest = num[i];
  }
}

// Print the smallest and largest numbers
console.log("Smallest number:", smallest);
console.log("Largest number:", largest);