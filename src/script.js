
import { bookLimit, isRequired } from './cst-val-API.js';
import './style.css'

function checkState(element) {
  return element
    ? "The book has been read ✔️"
    : "The book has NOT been read ❌";
}

function idGenerator(key) {
  let storedId = localStorage.getItem(key);

  if (!storedId) {
    storedId = crypto.randomUUID();
    localStorage.setItem(key, storedId);
  }

  return storedId;
}

function removeBook(id) {
  
  const index = library.findIndex((book) => book.id === id);

  if (index !== -1) {
    library.splice(index, 1);
  }
}

class Book {
  constructor(title, author, pages, readState) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readState = readState;
    this.id = idGenerator(title);
  }

  toggleStatus(){
    this.readState = !this.readState;
    return this.readState
  }
}


let library = [];

function addBookToLibrary(title, author, pages, readState) {
 let book = new Book(title, author, pages, readState);
  library.push(book);
}

addBookToLibrary("hola", "juan", "60", true);
addBookToLibrary("Hola", "pepe", "40", false);
addBookToLibrary("La Odisea", "Homero", "600", false);
addBookToLibrary("La Puta Vida", "Jordi Wild", "150", false);
console.table(library);

let bookshelf = document.querySelector("#bookshelf");

function runAround(array) {
  bookshelf.innerHTML = "";

  array.forEach((element) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.dataset.id = element.id;

    for (let key in element) {
      const info = document.createElement("p");
      if (key === "readState") {
        info.textContent = checkState(element.readState);
      } else {
        info.textContent = `${key}: ${element[key]}`;
      }

      item.append(info);
    }
    const toggle = document.createElement("button");
    toggle.textContent = "switch read";
    toggle.addEventListener("click", () => {
      element.toggleStatus();

      runAround(library);
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      removeBook(element.id);
      runAround(library);
    });

    item.append(deleteBtn, toggle);
    bookshelf.appendChild(item);
  });
}

runAround(library);

let openDiag = document.querySelector("#openDiag");
let closeDiag = document.querySelector("#closeDiag");
let form = document.querySelector("#form");
openDiag.addEventListener("click", () => form.show());
closeDiag.addEventListener("click", () => form.close());

let bookName = document.querySelector("#book");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let bookRead = document.querySelector("#read");

let loadBook = document.querySelector("#loadBook");
loadBook.addEventListener("click", (event) => {
event.preventDefault()
bookLimit()
isRequired(bookName)
isRequired(bookAuthor)
isRequired(bookPages)

addBookToLibrary(
    bookName.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.checked,
  );
  runAround(library);
  form.close();
});
