let bookTitle = 'The Hobbit';
let bookAuthor = 'J.R.R. Tolkien';
let bookPages = 310;

let book = {
    title: 'The Hobbit',
    Author: 'J.R.R. Tolkien',
    pages: 310,
    chapters: {
        chapter1: 'An Unexpected Party',
        chapter2: 'Roast Mutton',
        chapter3: 'A Short Rest',
        chapter4: 'Over Hill and Under Hill'
    },
    printBook: function() {
        console.log('printing book...');
    }
}
book.printBook();

// function printBook() {
//     console.log('printing book...');
// }
