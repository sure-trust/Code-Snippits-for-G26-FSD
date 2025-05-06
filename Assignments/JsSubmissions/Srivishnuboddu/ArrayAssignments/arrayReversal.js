let strings = ["apple", "banana", "cherry", "date", "elderberry"];

let reversedArray = [];

for (let i = strings.length - 1; i >= 0; i--) {
    reversedArray.push(strings[i]);
}

console.log("Reversed Array:", reversedArray);
