//Creating a object of student 
// Student Object
//set student.name = name;
//set student.age = age;
//set student.city = city;
//Update student.age = udpated age;
//remove student.city;

let Student = {
    name: "Mounika",
    age: 23,
    city: "Andhra Pradesh"
};
Student.age = 20;
Student.profession = "Learner";
delete Student.city;
console.log(Student);
