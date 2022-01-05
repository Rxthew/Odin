const menu = document.querySelector('#menu');
menu.onclick = function(){
    document.querySelector('.items').classList.toggle('visible')
}
const urghForm = document.querySelector('#urghForm');

const soUrgh = function(){
    const container = document.querySelector('#container')
    container.remove()
 //DOWNLOAD THE LINTER DOWNLOAD THE LINTER DOWNLOAD THE LINTER DOWNLOAD THE LINTER DOWNLOAD THE LINTER
    const form = document.createElement('form');
    form.setAttribute('id','form')
    const emlbl = document.createElement('label');
    emlbl.setAttribute('for','email');
    emlbl.textContent = 'Your E-mail here';
    const email = document.createElement('input');
    email.setAttribute('id','email');
    email.setAttribute('required', 'required');
    email.setAttribute('type', 'email')
    const ziplbl = document.createElement('label');
    ziplbl.setAttribute('for','zip');
    ziplbl.textContent = 'Your zip code here'; 
    const zip = document.createElement('input');
    zip.setAttribute('id','zip');
    zip.setAttribute('required', 'required');
    zip.setAttribute('pattern','[0-9]{5}')
    zip.setAttribute('minlength','5')
    zip.setAttribute('maxlength','5')
    const pwordlbl = document.createElement('label');
    pwordlbl.setAttribute('for','pword');
    pwordlbl.textContent = 'Your password'; 
    const pword = document.createElement('input');
    pword.setAttribute('id','pword');
    pword.setAttribute('required', 'required');
    pword.setAttribute('type', 'password');
    const pwordConfirmlbl = document.createElement('label');
    pwordConfirmlbl.setAttribute('for','pwordConfirm');
    pwordConfirmlbl.textContent = 'Confirm password here'; 
    const pwordConfirm = document.createElement('input');
    pwordConfirm.setAttribute('id','pwordConfirm');
    pwordConfirm.setAttribute('required', 'required');
    pwordConfirm.setAttribute('type', 'password');
    
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent =  'submit';

    form.appendChild(emlbl)
    form.appendChild(email); 
    form.appendChild(ziplbl);
    form.appendChild(zip);
    form.appendChild(pwordlbl);
    form.appendChild(pword);
    form.appendChild(pwordConfirmlbl)
    form.appendChild(pwordConfirm)
    form.appendChild(submit);

    form.style.display = 'flex';
    form.style.justifyContent = 'flex-start';
    form.style.flexDirection = 'column';
    form.style.padding = '1rem';
    form.style.alignItems = 'center';
    form.style.height = '40vh';
    form.style.width = '40vw'
    form.style.border = '1px solid'
    form.style.zIndex = 1000;
    form.style.position = 'fixed';
    form.style.top = '33vh';
    form.style.left = '33vw';
    document.body.appendChild(form)

    const validateForm = function(event){
        event.preventDefault();
        if(pwordConfirm.value !== pword.value){
            pwordConfirm.setCustomValidity("Password is not identical")
            pwordConfirm.reportValidity()
            return
        }
        
        
        
        
        form.remove()
        const five = document.createElement('div')
        five.textContent = 'High Five & download ES linter already!'
        five.style.display = 'flex';
        five.style.justifyContent = 'flex-start';
        five.style.flexDirection = 'column';
        five.style.padding = '1rem';
        five.style.alignItems = 'center';
        five.style.height = '40vh';
        five.style.width = '40vw'
        five.style.border = '1px solid'
        five.style.zIndex = 1000;
        five.style.position = 'fixed';
        five.style.top = '33vh';
        five.style.left = '33vw';
        document.body.appendChild(five)
        five.style
               
    }
    form.addEventListener('focusout',function(event){
        
         if(event.target.validity.valueMissing){
             event.target.setCustomValidity("This field has been left empty!")
             event.target.reportValidity()
         }
         else if(event.target.validity.typeMismatch){
            event.target.setCustomValidity("Nein!")
            event.target.reportValidity()

        }
        else if(event.target.validity.patternMismatch && event.target.id === 'zip'){
            event.target.setCustomValidity("This is not a valid zip code.")
            event.target.reportValidity()

        }
         else {
             event.target.setCustomValidity('');
         }

         
         
         //switch(event.target.id){
         //    case 'email': //
         ///    break
          //   case 'zip': //
            // break
            // case 'pword': //
             //break
             //case 'pwordConfirm'://
             //break
        // }
    })
    form.onsubmit = validateForm
}
urghForm.onclick = soUrgh

