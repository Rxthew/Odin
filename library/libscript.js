let myLib = [];
let span;
let div;

function Book(title, author='unknown', pageQuant='unknown',readStatus='unread'){
    this.title = title;
    this.author = author;
    

    Book.prototype.pageChecker = function pageChecker(){
        return (isNaN(+(pageQuant)) ? 'unknown' : pageQuant);
     };
    Book.prototype.readStatus = readStatus;

    this.pageQuant = this.pageChecker();
}



const addButton = document.querySelector('#new')
const form = document.querySelector('#formcontainer');;
const library = document.querySelector('#library');

addButton.addEventListener('click',function(){
    if (form.style.visibility != 'visible'){
    library.style.opacity = '0.2';
    form.style.visibility = 'visible';
    } 
})

const submitBook = document.querySelector('#submit');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readingInput = document.querySelector('#readstatus');


submitBook.addEventListener('click', function(){
    let details = new Book(titleInput.value, authorInput.value, pagesInput.value, readingInput.value);
    myLib.push(details);
    let id = (myLib.length -1 ).toString();
    div = document.createElement('div');
    div.setAttribute('class', 'book');
    div.setAttribute('id', `${id}`);
    document.querySelector('#library').appendChild(div);
    Object.values(details).forEach(function(i){
        span = document.createElement('span');
        span.textContent = i;
        span.setAttribute('id', `${i}`);
        div.appendChild(span);
    })
    form.style.visibility = 'hidden';
    library.style.opacity = '1';
})

