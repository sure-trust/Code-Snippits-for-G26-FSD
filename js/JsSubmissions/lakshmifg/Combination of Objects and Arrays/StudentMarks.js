<<<<<<< HEAD
function calculateAverageAndHighest(students) {
    if (!students || students.length === 0) {
      return { average: 0, highest: null }; // Handle empty or invalid input
    }
  
    let totalMarks = 0;
    let highestMarks = -1; // Initialize to a very low value
    let highestStudent = null;
  
    for (const student of students) {
      if (student.marks !== undefined && student.name !== undefined) {
        totalMarks += student.marks;
  
        if (student.marks > highestMarks) {
          highestMarks = student.marks;
          highestStudent = student;
        }
      } else {
          console.log("Warning: Student object missing name or marks");
      }
    }
  
    const average = totalMarks / students.length;
    return { average: average, highest: highestStudent };
  }
  
  // Example usage:
  const studentData = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "David", marks: 95 },
    { name: "Eve", marks: 88 },
    { name: "Frank", marks: 99 }
  ];
  
  const result = calculateAverageAndHighest(studentData);
  
  console.log("Average marks:", result.average);
  if (result.highest) {
    console.log("Student with highest marks:", result.highest.name, "with", result.highest.marks, "marks.");
  } else {
    console.log("No student data available");
=======
function calculateAverageAndHighest(students) {
    if (!students || students.length === 0) {
      return { average: 0, highest: null }; // Handle empty or invalid input
    }
  
    let totalMarks = 0;
    let highestMarks = -1; // Initialize to a very low value
    let highestStudent = null;
  
    for (const student of students) {
      if (student.marks !== undefined && student.name !== undefined) {
        totalMarks += student.marks;
  
        if (student.marks > highestMarks) {
          highestMarks = student.marks;
          highestStudent = student;
        }
      } else {
          console.log("Warning: Student object missing name or marks");
      }
    }
  
    const average = totalMarks / students.length;
    return { average: average, highest: highestStudent };
  }
  
  // Example usage:
  const studentData = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "David", marks: 95 },
    { name: "Eve", marks: 88 },
    { name: "Frank", marks: 99 }
  ];
  
  const result = calculateAverageAndHighest(studentData);
  
  console.log("Average marks:", result.average);
  if (result.highest) {
    console.log("Student with highest marks:", result.highest.name, "with", result.highest.marks, "marks.");
  } else {
    console.log("No student data available");
>>>>>>> upstream/main
  }