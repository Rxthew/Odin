let myLib = ['A Tale of Two Cities', 'Pride and Prejudice', 'War and Peace', '1984'];

let span;

function Book (title, author='an unidentified author', pageQuant='with an undetermined length of', readStatus='unread'){
    this.title = title;
    this.author = author;
    this.pageQuant = pageQuant;
    this.readStatus = readStatus;

    Book.prototype.info =  function(){
        return `${title} by ${author}, ${pageQuant} pages, ${readStatus}`
    }
}


myLib.forEach(function(i){
    id = myLib.indexOf(i).toString();
    span = document.createElement('span');
    span.textContent = i;
    span.setAttribute('class', 'book');
    span.setAttribute('id', `${id}`)
    document.querySelector('#library').appendChild(span);
})

let addButton = document.querySelector('#new')
addButton.addEventListener('click',function(){
    const form = document.querySelector('#formcontainer');
    const library = document.querySelector('#library');
    if (form.style.visibility != 'visible'){
    library.style.opacity = '0.2';
    form.style.visibility = 'visible';
    } 
})


function addBookToLibrary(){
//still need to fill in.//

}

