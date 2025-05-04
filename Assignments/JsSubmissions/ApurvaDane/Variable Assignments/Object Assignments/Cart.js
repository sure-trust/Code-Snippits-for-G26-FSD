// Create an object 
let cart = {
    itemName: "Mobile",
    quantity: 1,
    price: 30000
  };
  
  // Update the quantity
  cart.quantity = 3;
  
  // Calculate the total cost
  cart.totalCost = cart.quantity * cart.price;

  cart.discount = "20%";
  
  // Print the final object
  console.log(cart);
  