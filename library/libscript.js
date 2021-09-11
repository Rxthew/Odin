let myLib = [];
let span;
let div;

function Book(title, author, pageQuant,readStatus){
    this.Title = title;
    this.Author = author;
    this.readStatus = readStatus;
    function pageChecker(){
        return (isNaN(+(pageQuant)) ? 'unknown' : pageQuant);
     };
    this.Pages = pageChecker();
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
            if (i.Title == details.Title && i.Author == details.Author){
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

    //Remove button.
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.setAttribute('class', 'remove')
    removeButton.addEventListener('click', function(e){
        correspondingDetails = +(e.target.parentNode.id);
        myLib[correspondingDetails].removed = true;
        e.target.parentNode.remove();
    })
    div.appendChild(removeButton);     

    //Main display of the book.
    span = document.createElement('span');
    Object.keys(details).forEach(function(i){
        if (i != 'readStatus'){
        let p = document.createElement('p');
        details[i].length > 1 ? details[i] : details[i] = 'unknown';
        p.textContent = `${i}: ${details[i]}` ;
        span.appendChild(p)
    }
    })
    
    span.setAttribute('id', `${details.title}`)
    span.setAttribute('class', 'book');
    div.appendChild(span)

    //Read Status display, including functionality/
    const readbtn = document.createElement('button');
    readbtn.setAttribute('class', 'status')
    readbtn.textContent = details.readStatus;
    readbtn.addEventListener('click', function(e){
        e.target.textContent == 'Unread' ? e.target.textContent = 'Read' : e.target.textContent = 'Unread';
        correspondingDetails = +(e.target.parentNode.id);
        myLib[correspondingDetails].readStatus = e.target.textContent
     })
    div.appendChild(readbtn);    
     

    
    //Reverting form to default state 

    form.style.visibility = 'hidden';
    library.style.opacity = '1';
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    
})


