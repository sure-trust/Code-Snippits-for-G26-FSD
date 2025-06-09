//Create an object book with properties: title, author, isAvailable. Write code to check if the book is available and update its isAvailable status. Print the updated object.

let book = {
    title: "WINGS OF FIRE",
    author: "Abdul kalam azaad",
    isAvailable: true
};

if (book.isAvailable) {
    book.isAvailable = false;
}

console.log(book);