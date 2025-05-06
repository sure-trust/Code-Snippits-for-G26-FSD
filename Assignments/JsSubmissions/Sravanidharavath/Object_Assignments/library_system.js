let book={
    title:"JAVA",
    author:"Dr.Kuldeep",
    isAvailable:true
};
if(book.isAvailable)
{
    console.log("given book is available");
}
else{
    console.log("given book is not available");
}
book.isAvailable=false;
console.log(book);