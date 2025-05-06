// Profile Card

// Create an object user with properties: name, age, and city.
// Update the age property and add a new property, profession.
// Delete the city property and print the final object.


const user = {
    name: 'John Doe',
    age: 30,
    city: 'delhi'
};

console.log("Before making changes:", user);
//Update Age
user.age = 40;

//Delete the city
delete user.city;

console.log("After editing the data: ", user);