// uma factory function é uma função que retorna um objeto
// é uma forma de criar objetos sem a necessidade de usar classes
// é uma forma de criar objetos de forma mais simples
// é uma forma de criar objetos sem a necessidade de usar a palavra reservada new

function createBook(title, author, pages) {
    let book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('printing...');
        }
    }
    return book;
}



const book1 = createBook('Harry Potter', 'JK Rowling', 400);

book1.color = 'blue';

console.log(book1);
