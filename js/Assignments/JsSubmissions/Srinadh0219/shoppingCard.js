//Create an object cart with itemName, quantity, and price. Update the quantity and calculate the total cost (quantity x price). Add a discount property and print the final object.

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

// Output:
// { itemName: 'Apple', quantity: 30, price: 20, discount: 5 }
// Total Cost after discount:  595