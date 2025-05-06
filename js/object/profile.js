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