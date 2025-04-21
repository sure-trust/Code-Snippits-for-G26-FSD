// To-Do List
// Create an empty array toDoList. Add three items to the array.
//  Remove the first item and add a new item at the end. Print the updated array.
let toDoList = [];
toDoList.push("Item 1", "Item 2", "Item 3");
toDoList.shift();
toDoList.push("New Item");
console.log("Updated toDoList:", toDoList);

// Create an array of 5 numbers. 
// Sort the numbers in ascending and descending order. 
// Print the sorted arrays.
let numbers = [5, 3, 8, 1, 2];
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("Ascending order:", numbers);

let descending = numbers.reverse();
console.log("descending array:", descending);


// Create an array of 5 numbers. 
// Write code to find the largest and smallest numbers in the array without using built-in functions. 
// Print both values.
let array = [5, 3, 8, 1, 2];
let smallest = array[0];
let largest = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
        smallest = array[i];
    }
    if (array[i] > largest) {
        largest = array[i];
    }
}

console.log("Smallest:", smallest);
console.log("Largest:", largest);