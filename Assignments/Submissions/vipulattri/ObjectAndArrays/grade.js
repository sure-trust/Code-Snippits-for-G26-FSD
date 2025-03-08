let grades = {
    "Vipul": 85,
    "Vishal": 78,
    "Vikas": 92,
    "Varun": 60
  };
  
  function updateMarks(student, marks) {
    if (grades.hasOwnProperty(student)) {
      grades[student] = marks;
    }
  }
  
  function deleteStudent(student) {
    delete grades[student];
  }
  
  updateMarks("Vipul", 88);
  deleteStudent("Varun");
  
  console.log(grades);
  