<<<<<<< HEAD
// START  
// DECLARE inventory as a list of objects  
//   ADD items to inventory (itemName, stock, price)  
// ADD a new item to inventory  
// UPDATE stock of an existing item  
//   FOR each item in inventory  
//     IF itemName matches  
//       INCREASE stock  
// REMOVE an item from inventory  
//   FILTER out the item that matches the name  
// PRINT the final inventory  
// END  




let inventory = [
    { itemName: "Laptop", stock: 10, price: 80000 },
    { itemName: "Mouse", stock: 25, price: 1500 },
    { itemName: "Keyboard", stock: 15, price: 3000 }
];
inventory.push({ itemName: "Monitor", stock: 8, price: 120000 });
for (let item of inventory) {
    if (item.itemName === "Mouse") {
        item.stock += 10; 
    }
}
inventory = inventory.filter(item => item.itemName !== "Keyboard");
console.log(inventory);
=======
// START  
// DECLARE inventory as a list of objects  
//   ADD items to inventory (itemName, stock, price)  
// ADD a new item to inventory  
// UPDATE stock of an existing item  
//   FOR each item in inventory  
//     IF itemName matches  
//       INCREASE stock  
// REMOVE an item from inventory  
//   FILTER out the item that matches the name  
// PRINT the final inventory  
// END  




let inventory = [
    { itemName: "Laptop", stock: 10, price: 80000 },
    { itemName: "Mouse", stock: 25, price: 1500 },
    { itemName: "Keyboard", stock: 15, price: 3000 }
];
inventory.push({ itemName: "Monitor", stock: 8, price: 120000 });
for (let item of inventory) {
    if (item.itemName === "Mouse") {
        item.stock += 10; 
    }
}
inventory = inventory.filter(item => item.itemName !== "Keyboard");
console.log(inventory);
>>>>>>> upstream/main
