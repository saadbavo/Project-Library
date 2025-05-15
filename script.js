const myLibrary = [];

function Book(title, pages, author, yearPublished, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.yearPublished = yearPublished;
  this.read = read;
  if(!new.target){
    throw Error("you must use 'new'");
  }
}

function addBookToLibrary(title, pages, author, yearPublished) {
  const newBook = new Book(title, pages, author, yearPublished);
  myLibrary.push(newBook);
}
Book.prototype.toggleRead = function() {
  this.read = !this.read;
  
}

function removebook(bookId) {
  const bookIndex = myLibrary.findIndex(book => book.id === bookId);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1); // remove the book
      displayLibrary(); 
  }

}

function displayLibrary() {
  const container = document.getElementById("bookTableContainer");
  container.innerHTML = "";
  const table = document.createElement("table");



const headerRow = document.createElement("tr");
const headers = [ "Title", "Author", "Pages", "Year Published"]
headers.forEach(text =>{
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th)
});
table.appendChild(headerRow)

myLibrary.forEach(book => {
  const row = document.createElement("tr");
  const visibleKeys = ["title", "author", "pages", "yearPublished"];
visibleKeys.forEach(key => {
  const td = document.createElement("td");
  td.textContent = book[key];
  row.appendChild(td);
});

  const tread = document.createElement("td");
  const rd = document.createElement("button");
  rd.textContent = book.read ? "Mark as Unread" : "Mark as Read";
 rd.classList.add("toggle-read-btn"); 
  rd.addEventListener("click", ( )=> {

    book.toggleRead();
    displayLibrary();

  });

  tread.appendChild(rd);
  row.appendChild(tread);


  const tremoveTd = document.createElement("td");
  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.classList.add("remove");
  remove.setAttribute("data-id", book.id);
remove.addEventListener("click", () => removebook(book.id));




  tremoveTd.appendChild(remove);
  
  row.appendChild(tremoveTd);


  table.appendChild(row);
});
container.appendChild(table);
}

 


const dialog = document.querySelector("dialog");
const newBook = document.getElementById("btn");

newBook.addEventListener("click", () => {
  dialog.showModal();
});
const submit = document.getElementById("submit");
submit.addEventListener("click", function(e) {
  e.preventDefault();

  // Get values from inputs
  const title = document.getElementById("Title").value;
  const author = document.getElementById("Author").value;
  const pages = parseInt(document.getElementById("Pages").value);
  const yearPublished = parseInt(document.getElementById("YearPublished").value);

  // Add the book to library
  addBookToLibrary(title, pages, author, yearPublished);
  dialog.close();
  displayLibrary() ;
});





