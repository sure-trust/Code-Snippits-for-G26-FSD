let drinks = [
  { name: 'Tea', price: 29 },
  { name: 'Coffee', price: 49 },
  { name: 'Mojito', price: 29 },
  { name: 'Dry Fruit Shake', price: 99 },
  { name: 'Chikoo Shake', price: 69 },
  { name: 'Jamun Shot', price: 29 },
  { name: 'Sitafal Shake', price: 79 },
];

drinks = drinks.filter(drinks => drinks.price > 50);
console.log(drinks);
