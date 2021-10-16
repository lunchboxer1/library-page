console.log("Hello World!")

/*Variable*/
let myLibrary = [];

/*Classes*/
function Book(title, author, numPages, haveRead) {
				this.title = title;
				this.author = author;
				this.numPages = numPages;
				this.haveRead = haveRead;
}
			
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.numPages}, ${this.haveRead? 'have read' : 'not read yet'}`;
}

/*Selectors*/
const btnNewBook = document.querySelector('#makeNewBook');
const btnSubmit = document.querySelector('#submit');
const btnClose = document.querySelector('.closeFormBtn');
const form = document.querySelector('#formPopup1')

/*Event Handlers*/
btnNewBook.addEventListener('click', () => {
    //const divBookForm = document.querySelector('#bookEnterForm');
    toggleFormPopup();
});

btnSubmit.addEventListener('click', () => {
    toggleFormPopup();
});

btnClose.addEventListener('click', () => {
    toggleFormPopup();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = e.target['bookTitle'].value;
    const author = e.target['bookAuthor'].value;
    const numPages = e.target['bookNumPages'].value;
    const haveRead = e.target['bookRead'].checked;

    addBookToLibrary(new Book(title, author, numPages, haveRead));

    showBooks();
});



/*Funtion Definitions*/
function toggleFormPopup() {
    document.querySelector('#formPopup1').classList.toggle('active');
}
function addBookToLibrary(book) {
    myLibrary.push(book)
}

function showBooks() {
    const divBookShelf = document.querySelector('#bookshelf');

    //Remove all the nodes first
    while(divBookShelf.firstChild) {
        divBookShelf.removeChild(divBookShelf.firstChild);
    }

    myLibrary.forEach((book) => {
        const divBook = document.createElement('div');
        const divBookTitle = document.createElement('div');
        const divBookInfo = document.createElement('div');
        const divBookHaveRead = document.createElement('div');
        //con
        divBook.className = "book";

        divBook.textContent = book.info();

        divBookShelf.appendChild(divBook);
    })
}



const theHobbit = new Book('The Hobbit', 'JRR TOlkein', '1000', true);
const NOTW = new Book('NOTW', 'Pat ROthfuss', '1500', true);

addBookToLibrary(theHobbit);
addBookToLibrary(NOTW);

showBooks();


