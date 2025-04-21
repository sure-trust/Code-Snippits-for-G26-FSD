// Inventory Management
let inventory = [
    { itemName: "Laptop", stock: 15, price: 999.99 },
    { itemName: "Mouse", stock: 50, price: 29.99 },
    { itemName: "Keyboard", stock: 30, price: 79.99 }
];

// Add new item
function addItem(name, stock, price) {
    inventory.push({ itemName: name, stock, price });
}

// Update stock
function updateStock(itemName, newStock) {
    const item = inventory.find(item => item.itemName === itemName);
    if (item) item.stock = newStock;
}

// Remove item
function removeItem(itemName) {
    inventory = inventory.filter(item => item.itemName !== itemName);
}

// Test the functions
console.log("Initial inventory:", inventory);

addItem("Headphones", 25, 49.99);
console.log("\nAfter adding headphones:", inventory);

updateStock("Mouse", 45);
console.log("\nAfter updating mouse stock:", inventory);

removeItem("Keyboard");
console.log("\nAfter removing keyboard:", inventory); 