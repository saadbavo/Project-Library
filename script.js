const myLibrary = [];

function Book(title, pages, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
  this.yearPublished = yearPublished;
  if(!new.target){
    throw Error("you must use 'new'");
  }
}

function addBookToLibrary() {
  const newBook = new Book(title, pages, author, yearPublished);
  myLibrary.push(newBook);
}
