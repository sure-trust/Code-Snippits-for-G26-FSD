let cart = {
  itemName: 'Bag',
  quantity: 1,
  price: 499,
};

cart.quantity = 3;
cart.totalCost = cart.quantity * cart.price;

cart.discount = 0.05;
cart.amount = cart.totalCost - cart.totalCost * cart.discount;
console.log(cart);
