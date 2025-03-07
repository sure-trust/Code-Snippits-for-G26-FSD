// Create an object grades where keys are student names, and values are their marks. Update the marks of a student, delete one student's record, and print the updated object.
let grades = {
    Ramesh: 80,
    Srinadh: 75,
    Uday: 90,
    Anil: 85
};
grades["Ramesh"] = 85;
delete grades["Srinadh"];
console.log(grades);