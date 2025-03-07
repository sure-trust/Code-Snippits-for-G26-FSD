let grades = {
    "Vishnu": 95,
    "Ram": 78,
    "Suresh": 92,
    "Naveen": 64
};
console.log("Grades :",grades);
console.log("");
// Updating marks
grades["Bob"] = 88;
// Delete a student's record
delete grades["Suresh"];
console.log("Updated Grades:", grades);
