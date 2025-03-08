let cart={
    itemName:"dress",
    quantity:2,
    price:500
};
cart.quantity=3;
cart.totalCost=cart.quantity*cart.price;
cart.discount=50;
console.log(cart);