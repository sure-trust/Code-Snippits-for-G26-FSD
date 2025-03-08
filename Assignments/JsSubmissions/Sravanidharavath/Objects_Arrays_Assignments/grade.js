let grades={
    "sravani":89,
    "pavani":99,
    "pavan":100
};
//to update the marks of the student
grades["pavan"]=95;
//to delete one student's record
delete grades["pavani"];
console.log("updates Grades are:",grades);
