let inventory = [
    { itemName: "Laptop", stock: 10, price: 800 },
    { itemName: "Phone", stock: 15, price: 500 },
    { itemName: "Tablet", stock: 8, price: 300 }
];
//the original inventory is
console.log(inventory)
// Add a new item
inventory.push({ itemName: "Headphones", stock: 20, price: 100 });

// Update stock of an existing item
let updateItem = inventory.find(item => item.itemName === "Laptop");
if (updateItem) updateItem.stock += 5;

// Remove an item
inventory = inventory.filter(item => item.itemName !== "Tablet");

console.log("Final Inventory:", inventory);