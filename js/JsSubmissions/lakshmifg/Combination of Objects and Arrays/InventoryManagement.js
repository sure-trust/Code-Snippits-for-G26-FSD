<<<<<<< HEAD
function manageInventory(inventory) {
    // Add a new item
    this.addItem = function(newItem) {
      inventory.push(newItem);
    };
  
    // Update the stock of an existing item
    this.updateStock = function(itemName, newStock) {
      const item = inventory.find(item => item.itemName === itemName);
      if (item) {
        item.stock = newStock;
      } else {
        console.log(`Item "${itemName}" not found.`);
      }
    };
  
    // Remove an item from the array
    this.removeItem = function(itemName) {
      const index = inventory.findIndex(item => item.itemName === itemName);
      if (index !== -1) {
        inventory.splice(index, 1);
      } else {
        console.log(`Item "${itemName}" not found.`);
      }
    };
  
    //Function to print the array for testing.
    this.printInventory = function(){
      console.log(inventory);
    }
  
    return this;
  }
  
  // Example usage:
  const initialInventory = [
    { itemName: "Laptop", stock: 10, price: 1200 },
    { itemName: "Mouse", stock: 50, price: 25 },
    { itemName: "Keyboard", stock: 30, price: 50 },
  ];
  
  const inventoryManager = manageInventory(initialInventory);
  
  // Add a new item
  inventoryManager.addItem({ itemName: "Monitor", stock: 20, price: 300 });
  inventoryManager.printInventory();
  
  // Update the stock of an existing item
  inventoryManager.updateStock("Mouse", 60);
  inventoryManager.printInventory();
  
  // Remove an item from the array
  inventoryManager.removeItem("Keyboard");
  inventoryManager.printInventory();
  
  //Attempt to update or remove an item that does not exist.
  inventoryManager.updateStock("Headphones", 15);
  inventoryManager.removeItem("Headphones");

=======
function manageInventory(inventory) {
    // Add a new item
    this.addItem = function(newItem) {
      inventory.push(newItem);
    };
  
    // Update the stock of an existing item
    this.updateStock = function(itemName, newStock) {
      const item = inventory.find(item => item.itemName === itemName);
      if (item) {
        item.stock = newStock;
      } else {
        console.log(`Item "${itemName}" not found.`);
      }
    };
  
    // Remove an item from the array
    this.removeItem = function(itemName) {
      const index = inventory.findIndex(item => item.itemName === itemName);
      if (index !== -1) {
        inventory.splice(index, 1);
      } else {
        console.log(`Item "${itemName}" not found.`);
      }
    };
  
    //Function to print the array for testing.
    this.printInventory = function(){
      console.log(inventory);
    }
  
    return this;
  }
  
  // Example usage:
  const initialInventory = [
    { itemName: "Laptop", stock: 10, price: 1200 },
    { itemName: "Mouse", stock: 50, price: 25 },
    { itemName: "Keyboard", stock: 30, price: 50 },
  ];
  
  const inventoryManager = manageInventory(initialInventory);
  
  // Add a new item
  inventoryManager.addItem({ itemName: "Monitor", stock: 20, price: 300 });
  inventoryManager.printInventory();
  
  // Update the stock of an existing item
  inventoryManager.updateStock("Mouse", 60);
  inventoryManager.printInventory();
  
  // Remove an item from the array
  inventoryManager.removeItem("Keyboard");
  inventoryManager.printInventory();
  
  //Attempt to update or remove an item that does not exist.
  inventoryManager.updateStock("Headphones", 15);
  inventoryManager.removeItem("Headphones");

>>>>>>> upstream/main
  inventoryManager.printInventory();