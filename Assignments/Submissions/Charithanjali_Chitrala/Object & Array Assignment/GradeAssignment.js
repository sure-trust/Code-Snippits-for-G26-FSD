// START
// DECLARE grades as an object with student names as keys and marks as values
// UPDATE marks of "Charitha" to 82
// DELETE record of "Bhavya"
// PRINT updated grades
// END





let grades = {
    Affu: 85,
    Bhavya: 92,
    Charitha: 78,
    Vaishu: 88,
    Anjali: 95
};
grades["Charitha"] = 82;
delete grades["Bhavya"];
console.log(grades);
