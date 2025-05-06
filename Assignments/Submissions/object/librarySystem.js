// Library System

// Create an object book with properties: title, author, isAvailable.
// Write code to check if the book is available and update its isAvailable status.
// Print the updated object.

const book = {
    title: "Wings of Fire",
    author: "Abdul Kalam",
    isAvailable: true
};

// Check if the book is available
if (book.isAvailable) {
    console.log(`${book.title} by ${book.author} is available.`);
    book.isAvailable = false;
} 
if (book.isAvailable == false){
    console.log(`${book.title} by ${book.author} is not available.`);
}
