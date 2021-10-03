
class Book{
    constructor(title, author, pageQuant,readStatus){
        this.Title = title;
        this.Author = author;
        this.readStatus = readStatus;
        function pageChecker(){
            return (isNaN(+(pageQuant)) ? 'unknown' : pageQuant);
     };
        this.Pages = pageChecker();
}}


class Library{
    
    static myLib = [];
    static form = document.querySelector('#formcontainer');
    static library = document.querySelector('#library');
    static addButton = document.querySelector('#new');
    static titleInput = document.querySelector('#title');
    static authorInput = document.querySelector('#author');
    static pagesInput = document.querySelector('#pages');
    static readingInput = document.querySelector('#readstatus');


    static enableShowForm(){  
      return  Library.addButton.addEventListener('click', function(){  
        if (Library.form.style.visibility != 'visible'){
        Library.library.style.opacity = '0.2';
        Library.form.style.visibility = 'visible';
        }})
    }

    static enableSubmitBook(){
          return  Library.form.addEventListener('submit', function(e){
            e.preventDefault();
            let details = new Book(Library.titleInput.value, Library.authorInput.value, Library.pagesInput.value, Library.readingInput.value)
        
            
            function duplicateWarning(){
                Library.myLib.forEach(function(i){
                    if (i.Title == details.Title && i.Author == details.Author){
                        return alert('You seem to have added this book already.')
                    }
                })
            }
            duplicateWarning();
            Library.myLib.push(details);
            let id = (Library.myLib.length -1 ).toString();
        
        
        
            //Setting up book's container
            let div = document.createElement('div');
            div.setAttribute('id', `${id}`);
            div.setAttribute('class', 'bookCont');
            document.querySelector('#library').appendChild(div);
        
            //Remove button.
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.setAttribute('class', 'remove')
            removeButton.addEventListener('click', function(e){
                let correspondingDetails = +(e.target.parentNode.id);
                Library.myLib[correspondingDetails].removed = true;
                e.target.parentNode.remove();
            })
            div.appendChild(removeButton);     
        
            //Main display of the book.
            let span = document.createElement('span');
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
                let correspondingDetails = +(e.target.parentNode.id);
                Library.myLib[correspondingDetails].readStatus = e.target.textContent
             })
            div.appendChild(readbtn);    
             
        
            
            //Reverting form to default state 
        
            Library.form.style.visibility = 'hidden';
            Library.library.style.opacity = '1';
            Library.titleInput.value = '';
            Library.authorInput.value = '';
            Library.pagesInput.value = '';
            
        })

    }


}

Library.enableShowForm();
Library.enableSubmitBook();

