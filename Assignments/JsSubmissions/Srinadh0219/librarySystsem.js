//Create an object book with properties: title, author, isAvailable. Write code to check if the book is available and update its isAvailable status. Print the updated object.

let book = {
    title: "The Alchemist",
    author: "Kuldeep Ahlavat",
    isAvailable: true
};

if (book.isAvailable) {
    book.isAvailable = false;
}

console.log(book);