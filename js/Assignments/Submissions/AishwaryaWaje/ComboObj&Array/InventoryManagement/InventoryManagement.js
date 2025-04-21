let biscuits = [
  { itemName: 'Monaco', stock: 100, price: 10 },
  { itemName: 'Oreo', stock: 50, price: 30 },
  { itemName: 'Bourbon', stock: 20, price: 38 },
  { itemName: 'Krackjack', stock: 25, price: 10 },
];

biscuits.push({ itemName: 'Good Day', stock: 40, price: 5 });
console.log(biscuits);

let updatedStock = biscuits.find(biscuit => biscuit.itemName === 'Monaco');
if (updatedStock) {
  updatedStock.stock = 90;
}
console.log(updatedStock);

let removeItem = delete biscuits[2];
console.log(biscuits);

biscuits = biscuits.filter(biscuit => biscuit.itemName !== 'Bourbon');
console.log(biscuits);
