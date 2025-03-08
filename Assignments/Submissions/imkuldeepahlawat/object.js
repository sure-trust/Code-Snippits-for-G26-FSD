//Profile
//create a user object with propeties  name,age,city
// Update age
// Add a new property called profession
// Delete city property
//print the user
let user = {
    name: "siri",
    age: 2,
    city: "Anantapur"
};


user.age = 3;


user.profession = "Test Engineer";


delete user.city;

console.log( user);


//Shopping Cart (Object Basics)
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


//Library System
//create a object with properties title,author,isavailable
// Check availability and update status
let book = {
    title: "JavaScript ",
    author: "Brendan Eich",
    isAvailable: true
};


if (book.isAvailable) {
    console.log("The book is available for borrowing.");
    book.isAvailable = false; 
} else {
    console.log("The book is currently unavailable.");
}

console.log("Updated Book Object:", book);
