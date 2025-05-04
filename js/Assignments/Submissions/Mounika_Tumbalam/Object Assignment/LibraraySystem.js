<<<<<<< HEAD
// Library System
// Create an object book with properties: title, author, isAvailable. Write code to check if the book is available and 
// update its isAvailable status. Print the updated object.

let book = {
    title:	"Alice's Adventures in Wonderland",
    author:'Lewis Carroll',
    isAvailable:true
};
if(book.isAvailable){
    console.log(`${book.title} is available`)
    book.isAvailable=false
    console.log(`${book.title} is now updated as unavailable`);
}
else{
    console.log(`${book.title}is not available`);
    book.isAvailable=true;
    console.log(`${book.title} is now updated as available`)
}

=======
// Library System
// Create an object book with properties: title, author, isAvailable. Write code to check if the book is available and 
// update its isAvailable status. Print the updated object.

let book = {
    title:	"Alice's Adventures in Wonderland",
    author:'Lewis Carroll',
    isAvailable:true
};
if(book.isAvailable){
    console.log(`${book.title} is available`)
    book.isAvailable=false
    console.log(`${book.title} is now updated as unavailable`);
}
else{
    console.log(`${book.title}is not available`);
    book.isAvailable=true;
    console.log(`${book.title} is now updated as available`)
}

>>>>>>> upstream/main
console.log(book);