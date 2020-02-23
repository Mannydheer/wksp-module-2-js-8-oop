// From 2.3
// Copy over all of the code from 2.3...


// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.


// ----------------------

class Book {

    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read || false;
        this.startReadDate = startReadDate || null;
        this.endReadDate = endReadDate || null;
    }

}

let book1 = new Book("Flipped", "Romance", "Kathrine", "Yes");
let book2 = new Book("HarryPotter", "Mystery", "JkRowling", "No");
let book3 = new Book("The Book Theif", "Mystery", "Marcus Zusak", "No");
let book4 = new Book("Charlottes Web", "Fiction", "Eb White", "No");
let book5 = new Book("Before We Were Yours", "Romance", "Lisa Wingate", "No");


class BookList {
    constructor() {
        this.booksread = 0;
        this.bookUnread = 0;
        this.books = [];
        this.lastRead = null;
        this.currentlyReading= null;
        this.upNext = null;
    }

    //add methods. 
    add = (book) => {
        //first I will push the newly ceated book in the array.
        this.books.push(book);
        //next I will change the value of the read and unread count. 
        if (book.read === "No" || book.read === false) {
            this.bookUnread += 1;
        } else if (book.read === "Yes") {
            this.booksread += 1;
        }
    } 

    startReading = (title) => {
        this.currentlyReading = title;
        const book = this.books.find(book => book.title ===title);
        book.startReadDate = new Date(Date.now());

    }
    finishReading = (title) => {
        //based on the title of the book that was passed.
        this.lastRead = title;
        const book = this.books.find(book => book.title ===title);
        book.endReadDate = new Date(Date.now());
        //will set to true, meaning the book was read. 
        book.read = true;
        this.booksread += 1;
        this.bookUnread -+ 1;

    }

}
const homeLibrary = new BookList();
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));
homeLibrary.add(new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke'));
homeLibrary.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde'));
homeLibrary.add(new Book('The Revisionists', 'Science-fiction', 'thomas Mullen'));

homeLibrary.startReading("The Shining");
homeLibrary.finishReading('American Gods');


console.log(homeLibrary);