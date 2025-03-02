//Creating object
let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    isAvailable: true
};
//Check availability and update status
if (book.isAvailable) {
    console.log(`${book.title} is available.`);
    book.isAvailable = false;  // Someone borrowed the book
} else {
    console.log(`${book.title} is not available.`);
}
//Print final object
console.log("Updated Book Object:", book);
