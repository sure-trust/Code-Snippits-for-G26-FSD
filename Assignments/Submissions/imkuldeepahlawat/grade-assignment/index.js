// Grade Assignment
let grades = {
    "John": 85,
    "Alice": 92,
    "Bob": 78,
    "Carol": 95,
    "David": 88
};

// Update marks
grades["Bob"] = 82;

// Delete student record
delete grades["Alice"];

// Add new student
grades["Eve"] = 90;

console.log("Updated grades:", grades);

// Calculate class average
const average = Object.values(grades).reduce((sum, grade) => sum + grade, 0) / Object.keys(grades).length;
console.log("\nClass average:", average.toFixed(2)); 