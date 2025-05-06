//create a object with properties itemname,quantity,price
// Update quantity
// Calculate total cost
// Add a discount property
let cart = {
    itemName: "dress",
    quantity: 1,
    price: 500
};


cart.quantity = 3;


cart.totalCost = cart.quantity * cart.price;


cart.discount = "10%";

console.log( cart);

