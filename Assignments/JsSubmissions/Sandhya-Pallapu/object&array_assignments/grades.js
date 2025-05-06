let grades = {
    "Alekhya": 85,
    "Bindu": 92,
    "Chaanu": 78,
    "Divya": 90
};
console.log("the original list is",grades)

// Update a student's marks
grades["Chaanu"] = 82;

// Delete one student's record
delete grades["Divya"];

console.log("Updated Grades:", grades);