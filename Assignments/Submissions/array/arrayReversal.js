// Array Reversal

// Create an array of 5 strings.
// Reverse the array without using the built-in reverse() method.
// Print the reversed array.

const array = ["a", "b", "c", "d", "e", "f"];
// const newArray = array.reverse();
let newArray = [];
for (let i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
}

console.log("old Array: " + array);
console.log("new Array: " + newArray);
