let myLib = ['A Tale of Two Cities', 'Pride and Prejudice', 'War and Peace', '1984'];
let div 

function Book (title, author='an unidentified author', pageQuant='with an undetermined length of', readStatus='unread'){
    this.title = title;
    this.author = author;
    this.pageQuant = pageQuant;
    this.readStatus = readStatus;

    Book.prototype.info =  function(){
        return `${title} by ${author}, ${pageQuant} pages, ${readStatus}`
    }
}

const book = new Book('h')
console.log(book.info())

function addBookToLibrary(){
    myLib.forEach(function(i){
        div = document.createElement('div');
        div.textContent = i
        document.body.appendChild(div);
    })
}

addBookToLibrary();