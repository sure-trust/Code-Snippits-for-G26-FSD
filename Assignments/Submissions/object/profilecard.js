// Create an object user with properties: name, age, and city. Update the age property and add a new property, profession. Delete the city property and print the final object.

let user = {
    name: "Divyesh",
    age: 26,
    city: "meerut"
};

user.age = 20;

user.profession = "Full Stack Developer";

delete user.city;

console.log(user);

// Output:
// { name: 'Divyesh', age: 20, profession: 'Full Stack Developer' }
