// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2


// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.

class Book {

    constructor(title, genre, author, read) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read || false;
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
        this.lastBook = null;
        this.currentBook = null;
        this.upNext = null;
    }

    //add methods. 
    add = (book) => {
        //first I will push the newly ceated book in the array.
        this.books.push(book);
        //next I will change the value of the read and unread count. 
        if (book.read == "No") {
            this.bookUnread += 1;
        } else if (book.read == "Yes") {
            this.books.read += 1;
        }
    }

}
const homeLibrary = new BookList();
homeLibrary.add(new Book("American Gods", "Fantasy", "Neil Gayman", "No"));
console.log(homeLibrary);