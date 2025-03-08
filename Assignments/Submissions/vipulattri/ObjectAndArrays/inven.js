let inventory = [
    { itemName: "Laptop", stock: 10, price: 50000 },
    { itemName: "Mouse", stock: 50, price: 500 },
    { itemName: "Keyboard", stock: 30, price: 1500 }
  ];
  
  function addItem(name, stock, price) {
    inventory.push({ itemName: name, stock, price });
  }
  
  function updateStock(name, newStock) {
    let item = inventory.find(item => item.itemName === name);
    if (item) item.stock = newStock;
  }
  
  function removeItem(name) {
    inventory = inventory.filter(item => item.itemName !== name);
  }
  
  addItem("Monitor", 20, 10000);
  updateStock("Mouse", 40);
  removeItem("Keyboard");
  
  console.log(inventory);
  