// To-Do List

// Create an empty array toDoList.
// Add three items to the array.
// Remove the first item and add a new item at the end.
// Print the updated array.

let toDoList = [];
toDoList.push("Buy boooks");
toDoList.push("Work on Project");
toDoList.push("Go home");


// Print the original array
console.log("The original Object is : \n ", toDoList);


// Remove the first item
toDoList.shift();

// Add a new item at the end
toDoList.push("Meet People");

// Print the updated array
console.log("The updated Object is : \n ", toDoList);
