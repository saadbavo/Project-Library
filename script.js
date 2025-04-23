const myLibrary = [];

function Book(title, pages, author) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if(!new.target){
    throw Error("you must use 'new'");
  }
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
