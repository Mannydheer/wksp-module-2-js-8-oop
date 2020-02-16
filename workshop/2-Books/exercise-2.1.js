// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

class Book {

    constructor(title,genre,author,read) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
    }
    
}

let book1 = new Book("Flipped", "Romance", "Kathrine","Yes");
let book2 = new Book("HarryPotter", "Mystery", "JkRowling", "No");
let book3 = new Book("The Book Theif", "Mystery", "Marcus Zusak", "No");
let book4 = new Book("Charlottes Web", "Fiction", "Eb White","No");
let book5 = new Book("Before We Were Yours", "Romance", "Lisa Wingate", "No");


console.log(book1, book2, book3, book4, book5);