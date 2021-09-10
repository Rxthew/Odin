let myLib = [];
let span;
let div;

function Book(title, author='unknown', pageQuant='unknown',readStatus='unread'){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    function pageChecker(){
        return (isNaN(+(pageQuant)) ? 'unknown' : pageQuant);
     };
    this.pageQuant = pageChecker();
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

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readingInput = document.querySelector('#readstatus');


form.addEventListener('submit', function(e){
    e.preventDefault();
    let details = new Book(titleInput.value, authorInput.value, pagesInput.value, readingInput.value)

    
    function duplicateWarning(myLib, details){
        myLib.forEach(function(i){
            console.log(myLib);
            if (i.title == details.title && i.author == details.author){
                return alert('You seem to have added this book already.')
            }
        })
    }
    duplicateWarning(myLib,details);
    myLib.push(details);
    let id = (myLib.length -1 ).toString();
    div = document.createElement('div');
    div.setAttribute('class', 'book');
    div.setAttribute('id', `${id}`);
    document.querySelector('#library').appendChild(div);
    span = document.createElement('span');
    span.textContent = details.title;
    span.setAttribute('id', `${details.title}`)
    span.addEventListener('hover', e => e.target.nextSibling.style.visibility = 'visible')
    div.appendChild(span)
    next_div = document.createElement('div');
    next_div.setAttribute('class', 'popup');
    div.appendChild(next_div);
    Object.values(details).forEach(function(i){
        if(i != details.title){
        span = document.createElement('span');
        span.textContent = i;
        span.setAttribute('id', `${i}`);
        next_div.appendChild(span);
    }})
    form.style.visibility = 'hidden';
    library.style.opacity = '1';
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    
})

