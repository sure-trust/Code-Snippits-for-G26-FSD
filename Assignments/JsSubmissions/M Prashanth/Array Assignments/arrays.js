
let toDoList = [];
toDoList.push("Item 1", "Item 2", "Item 3");
toDoList.shift();
toDoList.push("New Item");
console.log("Updated toDoList:", toDoList);
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