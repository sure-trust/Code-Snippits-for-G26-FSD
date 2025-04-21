<<<<<<< HEAD
let book = {
    title: "Library System",
    author: "diar",
    isAvailable: true
};

console.log("Initial Book:", book);
if (book.isAvailable) {
    console.log("Book is available.");
    book.isAvailable = false;
    console.log("Book checked out.");
} else {
    console.log("Book is not available.");
    book.isAvailable = true;
    console.log("Book returned.")
}
console.log("Updated Book:", book);
if (book.isAvailable) {
    console.log("Book is available.");
} else {
    console.log("Book is not available.");
=======
let book = {
    title: "Library System",
    author: "diar",
    isAvailable: true
};

console.log("Initial Book:", book);
if (book.isAvailable) {
    console.log("Book is available.");
    book.isAvailable = false;
    console.log("Book checked out.");
} else {
    console.log("Book is not available.");
    book.isAvailable = true;
    console.log("Book returned.")
}
console.log("Updated Book:", book);
if (book.isAvailable) {
    console.log("Book is available.");
} else {
    console.log("Book is not available.");
>>>>>>> upstream/main
}