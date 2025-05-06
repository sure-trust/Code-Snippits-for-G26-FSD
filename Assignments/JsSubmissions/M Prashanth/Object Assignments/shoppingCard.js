
let cart = {
    itemName: "Apple",
    quantity: 5,
    price: 20
};

cart.quantity = 30;
let totalCost = cart.quantity * cart.price;
cart.discount = 5;
console.log(cart);
console.log("Total Cost after discount: ", totalCost-cart.discount);
