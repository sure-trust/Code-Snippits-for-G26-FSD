//create a object with properties title,author,isavailable
// Check availability and update status
let book = {
    title: "JavaScript ",
    author: "Brendan Eich",
    isAvailable: true
};


if (book.isAvailable) {
    console.log("The book is available for borrowing.");
    book.isAvailable = false; 
} else {
    console.log("The book is currently unavailable.");
}

console.log("Updated Book Object:", book);
