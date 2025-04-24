const myLibrary = [];

function Book(title, pages, author, yearPublished) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.yearPublished = yearPublished;
  if(!new.target){
    throw Error("you must use 'new'");
  }
}

function addBookToLibrary(title, pages, author, yearPublished) {
  const newBook = new Book(title, pages, author, yearPublished);
  myLibrary.push(newBook);
}
addBookToLibrary("To Kill a Mockingbird", 281, "Harper Lee", 1960);
addBookToLibrary("1984", 328, "George Orwell", 1949);
addBookToLibrary("The Great Gatsby", 180, "F. Scott Fitzgerald", 1925);
addBookToLibrary("Pride and Prejudice", 432, "Jane Austen", 1813);
addBookToLibrary("The Hobbit", 310, "J.R.R. Tolkien", 1937);


function displayLibrary() {
  const container = document.getElementById("bookTableContainer");
  const table = document.createElement("table");



const headerRow = document.createElement("tr");
const headers = ["ID", "Title", "Author", "Pages", "Year Published"]
headers.forEach(text =>{
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th)
});
table.appendChild(headerRow)

myLibrary.forEach(book => {
  const row = document.createElement("tr");
  Object.values(book).forEach(value => {
    const td = document.createElement("td");
    td.textContent = value;
    row.appendChild(td);
  });
  table.appendChild(row);
});
container.appendChild(table);
}
displayLibrary() ;
 


const dialog = document.querySelector("dialog");
const newBook = document.getElementById("btn");
newBook.addEventListener("click", () => {
  dialog.showModal();
});


