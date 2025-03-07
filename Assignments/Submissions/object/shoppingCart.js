// Shopping Cart (Object Basics)

// Create an object cart with itemName, quantity, and price.
// Update the quantity and calculate the total cost (quantity × price).
// Add a discount property and print the final object.

const cart = {
  itemName: "Apple",
  quantity: 2,
  price: 1.5,
};

// Update the quantity
cart.quantity += 3;

//calculte Total cost
const totalCost = cart.quantity * cart.price;
 console.log("Total Cost:", totalCost);

// Add discount property
cart.discount = '10%' ;
console.log("The cart is \n ",  cart);
console.log(`The cart is ${cart}`);