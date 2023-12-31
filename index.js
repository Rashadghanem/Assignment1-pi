class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `You've started reading ${this.title} by ${this.author}. It has ${this.pages} pages.`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBook(title) {
        for (let book of this.books) {
            if (book.title.toLowerCase() === title.toLowerCase()) {
                return book;
            }
        }
        return "Book not found.";
    }
    getAllBooks() {
        return this.books;
    }
}

// Create instances of Book and Library
const book1 = new Book("book1", "Rashad", 1);
const book2 = new Book("book2", "Rihaj", 2);
const book3 = new Book("book3", "Rayan", 3);
const book4 = new Book("book4", "tamer", 4);

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);


const addBookForm = document.getElementById("addBookForm");

addBookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookPages").value;

    const newBook = new Book(title, author, pages);
    library.addBook(newBook);

    addBookForm.reset();
});

// Handle form submission
const form = document.getElementById("searchForm");
const searchResults = document.getElementById("searchResults");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const foundBook = library.findBook(title);

    if (foundBook instanceof Book) {
        searchResults.textContent = `${foundBook.title} by ${foundBook.author}, ${foundBook.pages} pages`;
    } else {
        searchResults.textContent = foundBook;
    }
});
const showAllBooksButton = document.getElementById("showAllBooksButton");

showAllBooksButton.addEventListener("click", function () {
    const allBooks = library.getAllBooks();
    let results = "";
    for (let book of allBooks) {
        results += `${book.title} by ${book.author}, ${book.pages} pages<br>`;
    }
    searchResults2.innerHTML = results;
});