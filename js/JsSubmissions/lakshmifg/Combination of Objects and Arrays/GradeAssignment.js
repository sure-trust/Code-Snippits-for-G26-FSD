<<<<<<< HEAD
let grades = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    David: 95,
    Eve: 88,
  };
  
  // Update the marks of a student (e.g., Alice)
  grades.Alice = 90;
  
  // Delete one student's record (e.g., Charlie)
  delete grades.Charlie;
  
  // Print the updated object
  console.log(grades);
  
  //Alternative method using a function.
  function updateGrades(gradesObj, studentName, newGrade){
    if(gradesObj[studentName] !== undefined){
      gradesObj[studentName] = newGrade;
    } else {
      console.log(`Student ${studentName} not found.`);
    }
    return gradesObj;
  }
  
  function removeStudent(gradesObj, studentName){
    if(gradesObj[studentName] !== undefined){
      delete gradesObj[studentName];
    } else {
      console.log(`Student ${studentName} not found.`);
    }
    return gradesObj;
  }
  
  let grades2 = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    David: 95,
    Eve: 88,
  };
  
  grades2 = updateGrades(grades2, "Bob", 98);
  grades2 = removeStudent(grades2, "Eve");
  grades2 = updateGrades(grades2, "Frank", 100);
  grades2 = removeStudent(grades2, "Frank");
  
=======
let grades = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    David: 95,
    Eve: 88,
  };
  
  // Update the marks of a student (e.g., Alice)
  grades.Alice = 90;
  
  // Delete one student's record (e.g., Charlie)
  delete grades.Charlie;
  
  // Print the updated object
  console.log(grades);
  
  //Alternative method using a function.
  function updateGrades(gradesObj, studentName, newGrade){
    if(gradesObj[studentName] !== undefined){
      gradesObj[studentName] = newGrade;
    } else {
      console.log(`Student ${studentName} not found.`);
    }
    return gradesObj;
  }
  
  function removeStudent(gradesObj, studentName){
    if(gradesObj[studentName] !== undefined){
      delete gradesObj[studentName];
    } else {
      console.log(`Student ${studentName} not found.`);
    }
    return gradesObj;
  }
  
  let grades2 = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    David: 95,
    Eve: 88,
  };
  
  grades2 = updateGrades(grades2, "Bob", 98);
  grades2 = removeStudent(grades2, "Eve");
  grades2 = updateGrades(grades2, "Frank", 100);
  grades2 = removeStudent(grades2, "Frank");
  
>>>>>>> upstream/main
  console.log(grades2);