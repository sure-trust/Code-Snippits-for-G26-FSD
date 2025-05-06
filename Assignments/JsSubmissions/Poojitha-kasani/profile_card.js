let user={
    name:"sravani dharavath",
    age:20,
    city:"Telangana"
};
console.log("before changing the object:",user);
user.age=21;
user.profession="fullstack web development";
delete user.city;
console.log("final object is:", user);