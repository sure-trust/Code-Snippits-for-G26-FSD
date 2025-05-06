//Create object
let cart = {
    itemName: "Laptop",
    quantity: 2,
    price: 50000
};
console.log("cart object :",cart);
console.log("");
//Update quantity
cart.quantity = 3;

//Calculate total cost
let totalCost = cart.quantity * cart.price;
cart.totalCost = totalCost;

//Add discount
cart.discount = "10%";

//Print final object
console.log("Final Cart Object:", cart);
