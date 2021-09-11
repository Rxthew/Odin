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



    //Setting up book's container
    div = document.createElement('div');
    div.setAttribute('id', `${id}`);
    div.setAttribute('class', 'bookCont');
    document.querySelector('#library').appendChild(div);

    //Main display of the book represented by its title.
    span = document.createElement('span');
    span.textContent = details.title;
    span.setAttribute('id', `${details.title}`)
    span.setAttribute('class', 'book');
    span.addEventListener('click', e => e.target.nextSibling.classList.toggle('visible'))
    div.appendChild(span)


    //Extra details: author and page numbers if you click the display.
    next_div = document.createElement('div');
    next_div.setAttribute('class', 'popup');
    div.appendChild(next_div);

    const auth = document.createElement('p')
    auth.textContent =  `Author: ${details.author}`
    next_div.appendChild(auth);

    const pages = document.createElement('p');
    pages.textContent = `No. of pages: ${details.pageQuant}`
    next_div.appendChild(pages);

    //Read Status display, including functionality/
    let readbtn = document.createElement('button');
    readbtn.setAttribute('class', 'status')
    readbtn.textContent = details.readStatus;
    readbtn.addEventListener('click', function(e){
        e.target.textContent == 'Unread' ? e.target.textContent = 'Read' : e.target.textContent = 'Unread';
        correspondingDetails = +(e.target.parentNode.id);
        myLib[correspondingDetails].readStatus = e.target.textContent
     })
    div.appendChild(readbtn);    
     
    
    

    //Remove button. 


    //Reverting form to default state 

    form.style.visibility = 'hidden';
    library.style.opacity = '1';
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    
})


