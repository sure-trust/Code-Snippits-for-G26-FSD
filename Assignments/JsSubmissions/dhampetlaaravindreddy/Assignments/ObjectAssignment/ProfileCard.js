//START
   //Create an object called user with properties: name, age, and city
  // Update the age property of user
  // Add a new property called profession to user
  // Delete the city property from user
  // Print the final user object
//END
// Profile Card
let user = {
    name: 'Aravind',
    age: 22,
    city: 'Anantapur'
};

user.age = 22;
user.profession = 'student';

delete user.city;

console.log('User Object:', user);


let cart = {
    itemName: 'Laptop',
    quantity: 2,
    price: 1000
};

cart.quantity = 3;

const totalCost = cart.quantity * cart.price;

cart.discount = '10%';

console.log('Cart Object:', cart);
console.log('Total Cost:', totalCost);


let book = {
    title: 'JavaScript Essentials',
    author: 'reddy',
    isAvailable: true
};

if (book.isAvailable) {
    console.log('The book is available.');
    book.isAvailable = false; 
} else {
    console.log('The book is not available.');
}

console.log('Book Object:', book);
