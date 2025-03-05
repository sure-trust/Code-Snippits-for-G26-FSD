//Create an object cart with itemName, quantity, and price. Update the quantity and calculate the total cost (quantity x price). Add a discount property and print the final object.

let cart = {
    itemName: "Mango",
    quantity: 6,
    price: 60
};

cart.quantity = 35;
let totalCost = cart.quantity * cart.price;
cart.discount = 5;
console.log(cart);
console.log("Total Cost after discount: ", totalCost-cart.discount);

// Output:
// { itemName: 'Mango', quantity: 6, price: 60, discount: 5 }
// Total Cost after discount:  595