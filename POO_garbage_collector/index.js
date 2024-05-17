// uma factory function é uma função que retorna um objeto
// é uma forma de criar objetos sem a necessidade de usar classes
// é uma forma de criar objetos de forma mais simples
// é uma forma de criar objetos sem a necessidade de usar a palavra reservada new

function CreateBook(title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const book1 = new CreateBook('Harry Potter', 'JK Rowling', 400);

console.log(book1);
