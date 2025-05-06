// Array Reversal
const strings = ["apple", "banana", "cherry", "date", "elderberry"];

function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const reversedStrings = reverseArray(strings);
console.log("Original array:", strings);
console.log("Reversed array:", reversedStrings); 