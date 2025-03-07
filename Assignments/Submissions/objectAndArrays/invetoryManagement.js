// Inventory Management

// Create an array of objects, where each object contains itemName, stock, and price.
// Write code to:
// Add a new item.
// Update the stock of an existing item.
// Remove an item from the array.
// Print the final array.

const items = [
    { itemName: "Item 1", stock: 44, price: 49 },
    { itemName: "Item 2", stock: 42, price: 2334 },
    { itemName: "Item 3", stock: 0, price: 230 },
    { itemName: "Item 4", stock: 100, price: 2000 },
    { itemName: "Item 5", stock: 11, price: 100 }
]

// Adding a new item
items.push({ itemName: "Item unknown", stock:0, price:0});

//updating the stock of an existing item
items[2].stock = 50;

//Removing an item from the array
delete items[1];

// The Updated array
console.log(`The updated data is :`);
console.log(items);