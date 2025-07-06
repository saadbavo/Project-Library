
class Book {
  constructor(title, pages, author, yearPublished, read = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.yearPublished = yearPublished;
    this.read = read;
    if (!new.target) {
      throw Error("you must use 'new'");
    }
  }
  toggleRead() {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, pages, author, yearPublished) {
    const newBook = new Book(title, pages, author, yearPublished);
    this.books.push(newBook);
  }

  removeBook(bookId) {
    const bookIndex = this.books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      this.display();
    }
  }

  display() {
    const container = document.getElementById("bookTableContainer");
    container.innerHTML = "";
    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    const headers = ["Title", "Author", "Pages", "Year Published"];
    headers.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    this.books.forEach(book => {
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
      rd.addEventListener("click", () => {
        book.toggleRead();
        this.display();
      });
      tread.appendChild(rd);
      row.appendChild(tread);

      const tremoveTd = document.createElement("td");
      const remove = document.createElement("button");
      remove.textContent = "Remove";
      remove.classList.add("remove");
      remove.setAttribute("data-id", book.id);
      remove.addEventListener("click", () => this.removeBook(book.id));
      tremoveTd.appendChild(remove);
      row.appendChild(tremoveTd);

      table.appendChild(row);
    });
    container.appendChild(table);
  }
}

// Usage:
const library = new Library();

const dialog = document.querySelector("dialog");
const newBookBtn = document.getElementById("btn");

newBookBtn.addEventListener("click", () => {
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
  library.addBook(title, pages, author, yearPublished);
  dialog.close();
  library.display();
});

// Initial display
library.display();