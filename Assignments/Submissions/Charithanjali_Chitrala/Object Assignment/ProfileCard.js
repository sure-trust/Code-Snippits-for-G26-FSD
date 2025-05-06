// START  
// SET userDetails = { name: "Charithanjali", age: 20, city: "Kurnool" }  

// SET userDetails.age = 21  
// SET userDetails.profession = "Student"  
// REMOVE userDetails.city  

// PRINT userDetails  
// END  





let userDetails = {
    name: "Charithanjali",
    age: 20,
    city: "Kurnool"
};
userDetails.age = 21;
userDetails.profession = "Student";
delete userDetails.city;
console.log(userDetails);

