// Create object
let user = {
    name: "Sri Vishnu",
    age: 21,
    city: "Hyderabad"
};
console.log("my object :",user);
console.log("");

// Update age & add profession
user.age = 22;  // Updated age
user.profession = "Software Developer";  // New property

// Delete city
delete user.city;

// Print final object
console.log("My final Object:", user);
