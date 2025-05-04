<<<<<<< HEAD
// START  
// SET book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true }  

// IF book.isAvailable THEN  
//     PRINT "The Great Gatsby is available for borrowing."  
//     SET book.isAvailable = false  
// ELSE  
//     PRINT "The Great Gatsby is currently unavailable."  
// ENDIF  

// PRINT book  
// END  




let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: true
};
if (book.isAvailable) {
    console.log(`${book.title} is available for borrowing.`);
    book.isAvailable = false; 
} else {
    console.log(`${book.title} is currently unavailable.`);
}
console.log(book);
=======
// START  
// SET book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true }  

// IF book.isAvailable THEN  
//     PRINT "The Great Gatsby is available for borrowing."  
//     SET book.isAvailable = false  
// ELSE  
//     PRINT "The Great Gatsby is currently unavailable."  
// ENDIF  

// PRINT book  
// END  




let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: true
};
if (book.isAvailable) {
    console.log(`${book.title} is available for borrowing.`);
    book.isAvailable = false; 
} else {
    console.log(`${book.title} is currently unavailable.`);
}
console.log(book);
>>>>>>> upstream/main
