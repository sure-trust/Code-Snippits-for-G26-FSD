let inventory = [
    { itemName: "Pen", stock: 100, price: 5 },
    { itemName: "Notebook", stock: 50, price: 40 }
];
console.log("Initial Inventory:", inventory);
console.log("");

// adding new item
inventory.push({itemName:"Pencil",stock:60,price:10});
//updating
inventory = inventory.map(item =>{
    if(item.itemName == "Pen"){
        item.stock +=30;
    }
    return item;
});
// removing
inventory = inventory.filter(item => item.itemName !== "Notebook");
console.log("Final Inventory:", inventory);
