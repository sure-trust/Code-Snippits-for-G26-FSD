<<<<<<< HEAD
let cart = {
    itemName: "Laptop",
    quantity: 1,
    price: 1200
  };
  
  console.log("Initial Cart:", cart);
  
  // Update the quantity
  cart.quantity = 2;
  
  // Calculate total cost
  cart.totalCost = cart.quantity * cart.price;
  
  // Add a discount property
  cart.discount = 100;
  
=======
let cart = {
    itemName: "Laptop",
    quantity: 1,
    price: 1200
  };
  
  console.log("Initial Cart:", cart);
  
  // Update the quantity
  cart.quantity = 2;
  
  // Calculate total cost
  cart.totalCost = cart.quantity * cart.price;
  
  // Add a discount property
  cart.discount = 100;
  
>>>>>>> upstream/main
  console.log("Final Cart:", cart);