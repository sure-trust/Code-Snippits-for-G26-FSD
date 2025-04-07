// Removing Duplicates
// Create an array with duplicate numbers. 
// Write code to remove duplicates and print the updated array. Array Reversal

let array = [1, 2, 2, 3, 5, 4, 5, 1, 6];
let uniqueArray = [];
array.forEach(item => {
    if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
    }
});
let reversedArr = uniqueArray.reverse();
console.log("Unique Array:", uniqueArray);

// Create an array of 5 strings. 
// Reverse the array without using the built-in reverse() method. 
// Print the reversed array.

let stringArr = ["apple", "banana", "car", "bike", "dog"];
let reversedStringArr = [];
for (let i = stringArr.length - 1; i >= 0; i--) {
    reversedStringArr.push(stringArr[i]);
}
console.log("Reversed String Array:", reversedStringArr);