let book = {
    title: "Wings of Fire",
    author: "APJ Abdul Kalam",
    isAvailable: true 
  };
  function updateAvailability(book) {
    if (book.isAvailable) {
      console.log(`The book "${book.title}" by ${book.author} is currently available.`);
     
      book.isAvailable = false;
    } else {
      console.log(`The book "${book.title}" by ${book.author} is not available.`);
      
      book.isAvailable = true;
    }
  }
 
  updateAvailability(book);
  
  // Print the updated book object
  console.log("Updated book object:", book);