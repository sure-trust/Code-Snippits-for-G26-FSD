// Inventory Management
// Create an array of objects, where each object contains itemName, stock, and price. Write code to: Add a new item. Update the stock of an existing item. Remove an item from the array. Print the final array.

let inventory = [
    { itemName: "Apple", stock: 10, price: 10 },
    { itemName: "Banana", stock: 20, price: 5 },
    { itemName: "Orange", stock: 15, price: 8 }
];
let newItem = { itemName: "Mango", stock: 25, price: 15 };
inventory.push(newItem);
inventory.forEach(item => {
    if (item.itemName === "Banana") {
        item.stock = 30;
    }
});
let itemToRemove = "Apple";
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].itemName === itemToRemove) {
        inventory.splice(i, 1);
        break;
    }
}
console.log(inventory);
