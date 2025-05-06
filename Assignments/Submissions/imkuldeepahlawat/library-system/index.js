// Library System
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: true,
    
    checkOut() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return "Book successfully checked out";
        }
        return "Book is not available";
    },
    
    returnBook() {
        this.isAvailable = true;
        return "Book successfully returned";
    }
};

console.log("Initial status:", book);
console.log(book.checkOut());
console.log("After checkout:", book);
console.log(book.returnBook());
console.log("After return:", book); 