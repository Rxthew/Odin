import { DOMGeneral } from "./helpers/DOM";
import { projectEvents } from "./projectevents";


export const templateDOMStructs = function (){

    const DOM = DOMGeneral()
    const delegator = projectEvents.delegator

    const createProject = function(name){
         if (name === ''){return} 
         const reference = DOM.selectElem('.project'); 
         const proj = DOM.elementInit('div',{'id': `${name}${reference.length}`,
                                             'data-id':`${reference.length}`, 
                                             'class': 'project'},name
                                             )
        const remove = DOM.elementInit('button', {'class':'remove delProjBtn',
                                        'id':`remove${proj.dataset.id}`}, 'X');
                                             
        const addToDoListBtn = DOM.elementInit('button', {'class': 'addtoDoList',
                                                           'id': `add${DOM.selectElem('.project').length}`}, 'Add To-Do List');
        const modify = DOM.elementInit('button', {'class':'edit editProjTitleBtn'},'Edit');
        proj.appendChild(remove);
        proj.appendChild(modify);
        proj.appendChild(DOM.elementInit('div',{ 'class':'none toDoContainer',
                                                   'id':`container${reference.length}`}));
        proj.appendChild(addToDoListBtn);

        
        proj.onclick = delegator;
                                                                      
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        
     }
     

     const createToDoNote = function(chosenType){
        const input = DOM.selectElem('#temporaryInput')
        const submitTrigger = DOM.selectElem('#submitTrigger');
        const cancelTrigger = DOM.selectElem('#cancelTrigger');
         
        const project = input.parentElement;
        const container = DOM.selectElem(`#container${project.dataset.id}`);
        const formReference = Array.from(container.children);
        
        const form = DOM.elementInit('form',{'class': 'toDoNoteInput',
                                                 'id': `toDoNoteForm${project.dataset.id}${formReference.length}`,
                                                  'data-id':`${formReference.length}` })
        const submit = DOM.elementInit('button',{'type':'submit',
                                                   'id': 'submitNote', 
                                                  'class':'submitNote hidden',
                                                   },'')
        const cancel = DOM.elementInit('button', {'class':'cancel hidden',
                                                 'id':'cancelNote'}, '');
        
        const remove = DOM.elementInit('button', {'class':'remove none',
                                                   'id':`remove${project.dataset.id}${formReference.length}`}, 'X');
        const provTitle = DOM.selectElem('#provTitle');
        const title = DOM.elementInit('label', {'class':'itemTitle',
                                                   'for':'itemTitle',                       
                                                   'name':'itemTitle',
                                                     'id':`itemTitle${project.dataset.id}${formReference.length}`,
                                                     },`${provTitle.value}`,)
        const modify = DOM.elementInit('button', {'class':'edit'},'Edit');

        
        form.appendChild(submit);
        form.appendChild(cancel);
        form.appendChild(remove);
        form.appendChild(title);
        title.appendChild(modify)
        modify.disabled = true;
        provTitle.remove();  
        

        form.onsubmit = delegator;   
         
        container.classList.toggle('none', false);
        
         
        container.appendChild(form);

        const _generateChecklist = function(){ 
           const add = DOM.elementInit('button', {'class':'addCheck',
                                                     'id':`addCheck${project.dataset.id}${formReference.length}`,
                                                     'data-class':`child${project.dataset.id}${formReference.length}` 
                                                     }, 'Add Item');                                                     
            form.appendChild(add);

            form.classList.add('checkbox')
            remove.classList.toggle('none',false);
            enableBtns();
       }

       const _generateFreeForm = function(){

        input.value = '';
        input.classList.toggle('none',false);
        form.classList.add('freeForm');

        submitTrigger.classList.toggle('none',false);
        cancelTrigger.classList.toggle('none',false);
        input.focus();
        
       }

       chosenType === 'Checklist' ? _generateChecklist() : _generateFreeForm();  

       return 

     }


     const disableBtns = function(trgt='n/a'){
        const allBtns = document.querySelectorAll('button');
        allBtns.forEach(btn =>  btn === trgt || btn.classList.contains('none') || btn.classList.contains('hidden') ? btn.disabled = false : btn.disabled = true);

        const allEditables = DOM.selectElem('.edit');
        allEditables.forEach(itm =>  itm === trgt || itm.classList.contains('none') ? false : itm.classList.toggle('disabledEdit', true));
        const allDisabled = DOM.selectElem('.disabledEdit');
        allDisabled.forEach(itm => itm.classList.toggle('edit',false));
    }
    
    
    const enableBtns = function(){
        const all = document.querySelectorAll('button');
        all.forEach(btn => btn.disabled = false);

        const edits = DOM.selectElem('.disabledEdit');
        edits.forEach(itm => itm.classList.toggle('edit',true));
        edits.forEach(itm => itm.classList.toggle('disabledEdit',false));
        const deleteBtns = DOM.selectElem('.deleteCheck');
        deleteBtns.forEach(btn => btn.classList.toggle('none',false));        
    }

     const modifyElement = function(event){

        event.preventDefault();
          
         const form = event.target.parentElement;
         const modInput = (function(){
         if (form.classList.contains('freeForm')){    
            let modTextArea = DOM.elementInit('textarea',{'label':'freeForm',
            'name':'freeForm',
            'autocomplete':'off',
            'required':'required',
            'id':'modInput',
           'class': 'modInput',
           'rows' : '3',
           'cols' : '30'});

           return modTextArea;  
        }
        
        else {
            let modCheckInput = DOM.elementInit('input',{'type':'text',
            'autocomplete':'off',
            'required':'required',
            'class': 'modInput',
             'id':'modInput',});
            
             return modCheckInput   
        } 
    })()

         const submit = DOM.elementInit('button',{'type':'submit',
        'class':'submitMod',
         'id': 'submitMod'
         },'Submit Note')
         const revert = DOM.elementInit('button',{
         'class':'revertMod',
         'data-transfer':`${event.target.firstChild.nodeValue}` //temporary, update to use local storage & backend
          },'Revert Back') 
                 
         if (event.target.parentElement.classList.contains('itemTitle') || event.target.parentElement.classList.contains('project')){
             revert.dataset.transfer = event.target.parentElement.firstChild.nodeValue
        }
                    

        disableBtns();

         const _replaceWithInput = (function(){
            if(event.target.parentElement.classList.contains('itemTitle') || event.target.parentElement.classList.contains('project')){
                modInput.value = event.target.parentElement.firstChild.nodeValue;
                event.target.parentElement.firstChild.nodeValue = '';
                event.target.parentElement.appendChild(modInput);
            }
            else{
                modInput.value = event.target.firstChild.nodeValue
                event.target.replaceWith(modInput); 

            } 
            modInput.insertAdjacentElement('afterend',submit);
            submit.insertAdjacentElement('afterend',revert);
       })()
        
     }

     const submitModifiedElement = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const input = event.target.previousElementSibling;
        const revert = event.target.nextElementSibling;
        const label = DOM.elementInit('label', {'for': `${input.value}`, 'class':'edit'},`${input.value}`);
        const text = DOM.elementInit('p', {'class':'text edit'}, `${input.value}`);
        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' ) 

        
        if(input.value === ''){return};

        if(form.classList.contains('checkbox')){
            input.replaceWith(label);
            label.appendChild(del);

        }
        else if (form.classList.contains('freeForm')){
            input.replaceWith(text); 
        }

        else {
            const value = input.value
            event.target.parentElement.firstChild.nodeValue = value;
            input.remove();
        }
        
        enableBtns();
    
        revert.remove();
        event.target.remove();


        return         
     }

     const revertModifiedElement = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const submit = event.target.previousElementSibling;
        const input = submit.previousElementSibling;
        const label = DOM.elementInit('label', {'for': `${event.target.dataset.transfer}`, 'class':'edit'},`${event.target.dataset.transfer}`); //temporary, update to use local storage & backend
        const text = DOM.elementInit('p', {'class':'text edit'}, `${event.target.dataset.transfer}`); //temporary, update to use local storage & backend
        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' ) 


        if(form.classList.contains('checkbox')){
            input.replaceWith(label);
            label.appendChild(del);

        }
        else if (form.classList.contains('freeForm')){
            input.replaceWith(text); 
        }

        else {
            const value = event.target.dataset.transfer; //temporary, update to use local storage & backend
            event.target.parentElement.firstChild.nodeValue = value;
            input.remove();
        }
         
        enableBtns();
    
        submit.remove();
        event.target.remove();
        return         
     }
     
     
    const chooseToDoTitleForm = function(event){
        const domProject = event.target.parentElement;

        const _generateTitleForm = (function(){
             const form =  DOM.elementInit('form', {'class': 'chooseTitleForm transitForm',
                                                     'id': 'chooseTitleForm'})
             const label = DOM.elementInit('label',{'for':'chooseYourTitle'},'Choose Your Note\'s Title');
  
             const titleInput = DOM.elementInit('input',{'type':'text',
                                                'autocomplete':'off',
                                                 'required':'required',
                                                 'id':'provTitle',
                                                 'class': 'provTitle'},);
            const submitTitle = DOM.elementInit('button', {'type':'submit'}, 'Submit');
            const cancelTitle = DOM.elementInit('button', {'class':'cancelTitle'}, 'Cancel');
            form.appendChild(label);
            form.appendChild(titleInput);
            form.appendChild(submitTitle);
            form.appendChild(cancelTitle);
            form.onsubmit = delegator;
            return form
        })() 
        
        domProject.appendChild(_generateTitleForm)
        return

    }
    const submitToDoTitle = function(event){
       
        if(event.type === 'click'){return}
        event.preventDefault(); 
        const provTitle = DOM.selectElem('#provTitle');
        const domProject = event.target.parentElement.parentElement;
        domProject.appendChild(provTitle);
        provTitle.classList.toggle('none',true);
        
        event.target.classList.toggle('none',true);
        return
        
    }
     
     const chooseNoteType = function(event){
        if(event.type === 'click'){return}
        const domProject = event.target.parentElement;

         const form =  DOM.elementInit('form', {'class': 'chooseNoteType transitForm',
                                                    'id': 'noteTypeForm'                      })
         const label = DOM.elementInit('label',{'for':'chooseNoteType'},'Choose Your Note Type');
         const select = DOM.elementInit('select',{'class':'select',
                                                    'id': 'select' });
         const optGroup = DOM.elementInit('optgroup',{'label': 'Note Options'}, 'Choose your note type');
         const checklistOpt = DOM.elementInit('option',{'name': 'checklist',
                                                         'class': 'checklist'},'Checklist');
         const inputOpt = DOM.elementInit('option',{'name': 'input',
                                                     'class': 'input'},'Freeform');
         const choice = DOM.elementInit('button', {'type':'submit'}, 'Submit');
         const cancel = DOM.elementInit('button', {'class':'cancelChoice'}, 'Cancel');
         
         select.appendChild(optGroup);
         optGroup.appendChild(checklistOpt);
         optGroup.appendChild(inputOpt);
         form.appendChild(label);
         form.appendChild(select);
         form.appendChild(DOM.elementInit('br'));
         form.appendChild(choice);
         form.appendChild(cancel)

         disableBtns();
         form.onsubmit = delegator;
         domProject.appendChild(form);

         return form
    }
     
     const revealCreateForm = function(){
        let createForm = DOM.selectElem('#createForm');
        createForm.classList.toggle('none', false);
        
     }

     const resetCreateForm = function(){
         let createForm = DOM.selectElem('#createForm');
         createForm.classList.toggle('none', true);

         let titleInp = DOM.selectElem('#titleInp');
         titleInp.value = '';
     }

     const toggleSize = function(event){
        if (event.target.classList.contains('project')){

        const container = DOM.selectElem(`#container${event.target.dataset.id}` )                          
        container.classList.toggle('none');

        }

        else {
        
        const form = event.target.parentElement;
        const project = event.target.parentElement.parentElement;    
        const formChildren = Array.from(form.children);
        formChildren.forEach(itm => itm.dataset.class === `child${project.dataset.id}${form.dataset.id}` ? itm.classList.toggle('none') : false)       
            
        }
     }

     const noteTypeGenerator = function(event){ 

        if(event.type === 'click'){return}

        const getSelected = (function(){
             const select =  DOM.selectElem('#select');
             return select.options[select.selectedIndex].value;
        })()
        
        const _generateTemporaryInput = (function(){
            const project = DOM.selectElem('#noteTypeForm').parentElement;
           
        if (getSelected === 'Checklist'){    
            let temporaryInput = DOM.elementInit('input',{'type':'text',
            'autocomplete':'off',
            'required':'required',
            'id':'temporaryInput',
           'class': 'temporaryInput none'});  
            project.appendChild(temporaryInput);
        }
        
        else {
            let textArea = DOM.elementInit('textarea', {'id':'temporaryInput',
                'name':'freeForm',
                'label':'freeForm',
                'class':'temporaryInput none',
                'autocomplete':'off',
                'required':'required',
                'rows' : '4',
                'cols' : '50' });
            project.appendChild(textArea);
             
        }
        const _generateTriggerButtons = (function(){

            const submit = DOM.elementInit('button',{'type':'button',
            'id': 'submitTrigger', 
           'class':'submitTrigger none',
            },'Submit Note')
            const cancel = DOM.elementInit('button', {'class':'cancelTrigger none',
          'id':'cancelTrigger'}, 'Cancel');

          project.appendChild(submit);
          project.appendChild(cancel);

        })()
        
        
        })()


        
        projectEvents.publish('createNote', getSelected);
        projectEvents.publish('deleteNoteTypeForm', event);
        projectEvents.publish('saved');
        
        
        return getSelected
     }



    const deleteForms = function(event){

        if(event.target.nodeName != 'BUTTON' && event.type === 'click'){return}  
              
        const _cancelNoteTypeForm = function(){

            const _deleteProvTitle = function(){
                 const provTitle =  DOM.selectElem('#provTitle')
                 provTitle ? provTitle.remove() : false
                 return   
            };

            const _deleteAddNoteForm = (function(){
                 const noteTypeForm = DOM.selectElem('#noteTypeForm');
                 noteTypeForm ? noteTypeForm.remove() : false;
                 return

             })();
            
            event.target.className === 'cancelChoice' ? _deleteProvTitle() : false; 
            return
        }


         let deleted = DOM.selectElem('#chooseTitleForm');
         deleted ? deleted.remove() : _cancelNoteTypeForm()
         
         return


    }


    const cleanToDoForm = function(){
      
      const form = DOM.selectElem('#submitNote').parentElement;
      const project = DOM.selectElem('#temporaryInput').parentElement;  

      const _deleteTransitoryStuff = (function(){  
        let deleted = DOM.selectElem('#temporaryInput');
        deleted.remove();

        deleted = DOM.selectElem('#submitTrigger');
        deleted.remove();

        deleted = DOM.selectElem('#cancelTrigger');
        deleted.remove();

        deleted = DOM.selectElem('#submitNote');
        deleted.remove();

        deleted = DOM.selectElem('#cancelNote');
        deleted.remove(); 
    })()
      
      const _convertAddCheck = (function(){ 

        let convert = DOM.selectElem(`#addCheck${project.dataset.id}${form.dataset.id}`);

        if (convert){
            convert.removeAttribute('class');
            convert.className = 'addCheckMod';
      
        }
    })()

      const _removeWhereEmpty = (function(){
        
        const formChildren = Array.from(form.children);
        const child = document.querySelector(`[data-class=child${project.dataset.id}${form.dataset.id}]`)
        !(formChildren.includes(child)) ? form.remove() : false;

    })()

        return
    }

    const toggleOpaque = function(event){
        const containerChildren = Array.from(DOM.selectElem('#container').children);
        const header = DOM.selectElem('#header');
        const headerChildren = Array.from(header.children)

        if(DOM.selectElem('#createForm').classList.contains('none') && headerChildren[0].classList.contains('opaque')){
            headerChildren.forEach(child => child.classList.toggle('opaque'), false )
            return

        }

       else if (event.target.classList.contains('revealForm')){
            headerChildren.forEach(child => child.classList.toggle('opaque', true))
            return
        }

        else {
        
        const projectChildren = Array.from(event.target.closest('.project').children);

        if(header.classList.contains('opaque')){
            containerChildren.forEach(child => child === event.target.closest('.project') ? child.classList.toggle('opaqueColor',false) : child.classList.toggle('opaque', false));
            projectChildren.forEach(child => child.classList.toggle('opaque', false))
            return
        }
        else{
            containerChildren.forEach(child => child === event.target.closest('.project') ? child.classList.toggle('opaqueColor',true) : child.classList.toggle('opaque', true));
            projectChildren.forEach(child => child.classList.contains('transitForm') ? false : child.classList.toggle('opaque',true));
        }

    }
        
    }
        
    
    const generateNewAddCheck = function(event){
        
        event.preventDefault();
        const form = event.target.parentElement;
        const project = form.parentElement.parentElement;

        if(DOM.selectElem('#temporaryInput') && DOM.selectElem('#temporaryInput').label === 'freeForm'){
            DOM.selectElem('#temporaryInput').remove();
            DOM.selectElem('#submitTrigger').remove();
            DOM.selectElem('#cancelTrigger').remove();
        }

        if (!DOM.selectElem('#temporaryInput')){
        const temporaryInput = DOM.elementInit('input',{'type':'text',
        'autocomplete':'off',
        'required':'required',
        'id':'temporaryInput',
        'class': 'temporaryInput none'});


        project.appendChild(temporaryInput);

        const _generateTriggerButtons = (function(){

            const submit = DOM.elementInit('button',{'type':'button',
            'id': 'submitTrigger', 
           'class':'submitTrigger none',
            },'Submit Note')
            const cancel = DOM.elementInit('button', {'class':'cancelTrigger none',
          'id':'cancelTrigger'}, 'Cancel');

          project.appendChild(submit);
          project.appendChild(cancel);

        })()

        disableBtns(event.target);
    
        }

        if (!DOM.selectElem('#submitNote')){       
         const originalSubmit = DOM.elementInit('button',{'type':'submit',
        'id': 'submitNote', 
        'class':'submitNote hidden',
        },'')

        form.appendChild(originalSubmit);

        }
        
        if (!DOM.selectElem('#cancelNote')){       
            const cancel = DOM.elementInit('button',{
           'id': 'cancelNote', 
           'class':'cancel hidden',
           },'')
   
           form.appendChild(cancel);
    
        }
            
        projectEvents.publish('newCheckItem', event);

        return

    }

    const addNewCheck = function(event){
        event.preventDefault();
        const input = DOM.selectElem('#temporaryInput');
        const submit = DOM.selectElem('#submitTrigger');
        const cancel = DOM.selectElem('#cancelTrigger');
        input.classList.toggle('none',false);
        input.focus();
        disableBtns();
        submit.classList.toggle('none',false);
        cancel.classList.toggle('none',false);
        return
    }

    
      const _generateCheckItem = function(){  
        const input = DOM.selectElem('#temporaryInput');
        const project = input.parentElement;
        const form = DOM.selectElem('#submitNote').parentElement;

        const del = DOM.elementInit('button', {'class': 'deleteCheck none'},'delete' ) //to edit when creating dropdown
       
        const checkbox = DOM.elementInit('input', {'type':'checkbox',
                                                    'id': `check${project.dataset.id}${form.dataset.id}${input.value}`,
                                                    'class':'check',
                                                    'data-class':`child${project.dataset.id}${form.dataset.id}`});
        const label = DOM.elementInit('label', {'for': `${input.value}`,
                                                 'class': 'edit',
                                                'data-class':`child${project.dataset.id}${form.dataset.id}`},`${input.value}`);
        const br = DOM.elementInit('br',{'data-class':`child${project.dataset.id}${form.dataset.id}`});

       
        label.appendChild(del);
        form.appendChild(checkbox);
        form.appendChild(label);
        form.appendChild(br);

        return
    }

    const submitItem = function(){
    
    const input = DOM.selectElem('#temporaryInput');
    const project = input.parentElement;
    const form = DOM.selectElem('#submitNote').parentElement;
    const remove = DOM.selectElem(`#remove${input.parentElement.dataset.id}${form.dataset.id}`);
    
    if (input.value === ''){return};

    if (form.classList.contains('checkbox')){
        _generateCheckItem();
        input.classList.toggle('none', true);        
        return
    }

    
    const text = DOM.elementInit('p', {'class':'text edit',
                                      'data-class':`child${project.dataset.id}${form.dataset.id}`}, `${input.value}`);

    form.appendChild(text);
    remove.classList.toggle('none',false);

    return

   }

   const triggerEvents = function(event){
       const cancel = DOM.selectElem('#cancelNote')
       const submit = DOM.selectElem('#submitNote')

       event.target === DOM.selectElem('#submitTrigger') ? submit.click() : cancel.click()

   }

   const deleteItem = function(event){
       event.preventDefault();
       event.target.parentElement.remove();
    return
   }
   
   
   const deleteCheck = function(event){
       event.preventDefault();

       const label = event.target.parentElement
       const br = label.nextElementSibling;
       const check = label.previousElementSibling;
       const form = check.parentElement;
       const project = form.parentElement.parentElement;


       br.remove() 
       check.remove() 
       label.remove()
       
       const formChildren = Array.from(form.children);
       const child = document.querySelector(`[data-class=child${project.dataset.id}${form.dataset.id}]`)
       !(formChildren.includes(child)) ? form.remove() : false;
       
       return
    }

    const moveItem = function(event){
        const target = event.target.closest('.toDoNoteInput') || event.target.closest('.project')
        //let shiftX =
        //let shiftY = 

    }

     return {
         createProject,
         createToDoNote,
         revealCreateForm,
         resetCreateForm,
         toggleSize,
         chooseToDoTitleForm,
         submitToDoTitle,
         chooseNoteType,
         noteTypeGenerator,
         toggleOpaque,
         deleteForms,
         disableBtns,
         enableBtns,
         cleanToDoForm,
         modifyElement,
         triggerEvents,
         revertModifiedElement,
         addNewCheck,
         generateNewAddCheck,
         submitItem,
         submitModifiedElement,
         deleteItem,
         deleteCheck,
         
     }
}