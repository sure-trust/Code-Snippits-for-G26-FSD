let book = {
  title: 'It ends with us',
  author: 'Colleen Hoover',
  isAvaitable: true,
};

if (book.isAvaitable) {
  console.log(`The book "${book.title}" is available`);
  book.isAvaitable = false;
} else {
  console.log(`The book "${book.title}" is unavailable`);
}
