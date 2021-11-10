import { DOMGeneral } from "./helpers/DOM";
import { projectEvents } from "./projectevents";


export const templateDOMStructs = function (){

    const DOM = DOMGeneral()
    const delegator = projectEvents.delegator

    const projButtons = function(){
        
        const viewProjectBtn = DOM.elementInit('button', {'class': 'viewProject'}, 'View Inside');
        const addToDoListBtn = DOM.elementInit('button', {'class': 'addtoDoList',
                                                           'id': `add${DOM.selectElem('.project').length}`}, 'Add To-Do List');
        //transfer the the todolist buttons here
        return {
            viewProjectBtn,
            addToDoListBtn
        }
        
        //template for project buttons to be
        //used below. Remember data-attribute
        //event delegation to be used. 
    }

    const createProject = function(name){
         const reference = DOM.selectElem('.project'); 
         const proj = DOM.elementInit('div',{'id': `${name}${reference.length}`,
                                             'data-id':`${reference.length}`, 
                                             'class': 'project'},name
                                             )
        proj.appendChild(projButtons().viewProjectBtn);
        proj.appendChild(DOM.elementInit('div',{ 'class':'none',
                                                   'id':`container${reference.length}`}));
        proj.appendChild(projButtons().addToDoListBtn);

        
        proj.onclick = delegator;
                                                                      
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        return proj

     }

     const createToDoNote = function(chosenType){
        const input = DOM.selectElem('#temporaryInput');
 
        const project = DOM.selectElem('#temporaryInput').parentElement;
        const container = DOM.selectElem(`#container${project.dataset.id}`);
        
        const form = DOM.elementInit('form',{'class': 'toDoNoteInput',
                                                 'id': `toDoNoteForm${project.dataset.id}`})//continue
        const submit = DOM.elementInit('button',{'type':'submit',
                                                  'class':'submitNote'},'Submit Note')
        
        
        form.appendChild(submit);
        form.onsubmit = delegator; //(event here: submits note, removes temp, reenables add)   
         
        container.classList.toggle('none', false);
        submit.classList.toggle('none', true);
         
        container.appendChild(form);
 
        const checkContent = function(){
            input.value === '' ? submit.classList.toggle('none',true) : submit.classList.toggle('none',false)
        }
 
        input.oninput = checkContent; //shift to delegator
 
        const generateCheckItem = function(){
            const checkbox = DOM.elementInit('input', {'type':'checkbox'});
            const label = DOM.elementInit('label', {'for': `${input.value}`},`${input.value}`);
            const br = DOM.elementInit('br');
 
            input.value = '';
            form.appendChild(checkbox);
            form.appendChild(label);
            form.appendChild(br);
            return
        }

       const generateChecklist = function(){ 
           const add = DOM.elementInit('button', {'class':'addCheck'}, 'Submit Item');
           
           const convertCheckButton = function(){
               return  input.value === '' ? add.textContent = 'Add Item' : add.textContent = 'Submit Item';  
            }

           input.addEventListener('input',convertCheckButton) ;//shift to delegator, this will be trickier.
                                                               // (because the event handler is not applicable if type
           const submitCheck = function(event){                // is freeform, so either remove/add it each time, or set 
               event.preventDefault();                         // put a conditional statement in there to preempt errors)
               if (add.textContent === 'Submit Item'){
               generateCheckItem();
               input.classList.toggle('none', true);
               add.textContent = 'Add Item';
            }
               else {
               input.classList.toggle('none',false);
               add.textContent = 'Submit Item'
            }
            }

            add.onclick =  submitCheck; //shift to delegator  
            form.appendChild(add)
       }


       chosenType === 'Checklist' ? generateChecklist() : generateChecklist;  

       return {
           checkContent, //include the rest re: stuff you need to use delegator for. 
           generateChecklist, //you need to refer the factory methods inside of this....-__-

       }

     }

     const chooseNoteType = function(event){
        const domProject = event.target.parentElement;

        if (domProject.lastElementChild.className === 'chooseNoteType') {
            return
        }

         const form =  DOM.elementInit('form', {'class': 'chooseNoteType',
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
         
         select.appendChild(optGroup);
         optGroup.appendChild(checklistOpt);
         optGroup.appendChild(inputOpt);
         form.appendChild(label);
         form.appendChild(select);
         form.appendChild(DOM.elementInit('br'));
         form.appendChild(choice);

         
         form.onsubmit = delegator;
         domProject.appendChild(form);

         return form
 }
     
     const revealCreateForm = function(){
        let hidden = DOM.selectElem('#createForm');
        hidden.classList.toggle('hidden', false);
        
     }

     const toggleProjectSize = function(event){
            event.target.nextElementSibling.classList.toggle('none');
     }

     const noteTypeGenerator = function(){

        const getSelected = (function(){
             const select =  DOM.selectElem('#select');
             return select.options[select.selectedIndex].value;
        })()
        
        const generateTemporaryInput = (function(){
            const project = DOM.selectElem('#noteTypeForm').parentElement;
            const temporaryInput = DOM.elementInit('input',{'type':'text',
                                                            'autocomplete':'off',
                                                            'id':'temporaryInput',
                                                           'class': 'temporaryInput'}); 
            project.appendChild(temporaryInput);      
        })()
        
        projectEvents.publish('deleteNoteTypeForm');
        projectEvents.publish('createNote', getSelected);


        //remember createnote thing will apply to the backend as well,
        // so when you pass in that argument, that's when the 'type'
        // of the note will be stored in there. 
        
        
        return getSelected
     }



    const deleteAddNoteForm = function(){
         const deleted = DOM.selectElem('#noteTypeForm');
         deleted.remove();
    }

    const disableBtns = function(){
        const  project = DOM.selectElem('#temporaryInput').parentElement;

        const addtoDoButton = DOM.selectElem(`#add${project.dataset.id}`);
        const newProjectButton = DOM.selectElem('#submit');

        addtoDoButton.disabled = true;
        newProjectButton.disabled = true;
        return 
     }

    const removeTempInput = function(){
        const deleted = DOM.selectElem('#temporaryInput');
        deleted.remove();

        return

    }

    const enableBtns = function(event){

     const project = event.target.parentElement.parentElement.parentElement;

     const addtoDoButton = DOM.selectElem(`#add${project.dataset.id}`);
     const newProjectButton = DOM.selectElem('#submit');

     addtoDoButton.disabled = false;
     newProjectButton.disabled = false;

     return

    }
    
    //const checkContent = function(){
    //    input.value === '' ? submit.classList.toggle('none',true) : submit.classList.toggle('none',false)
    //}


    //const convertCheckButton = function(){
    //    return  input.value === '' ? add.textContent = 'Add Item' : add.textContent = 'Submit Item';  
     //}


     //const submitCheck = function(event){                
     //   event.preventDefault();                         
     //   if (add.textContent === 'Submit Item'){
     //   generateCheckItem();
     //   input.classList.toggle('none', true);
     //   add.textContent = 'Add Item';
    // }
    //    else {
    //    input.classList.toggle('none',false);
    //    add.textContent = 'Submit Item'
    // }
    // }

    //  const generateCheckItem = function(){
    //    const input = DOM.selectElem('#temporaryInput');
    //    const project = DOM.selectElem('#temporaryInput').parentElement;
   //     const form = DOM.selectElem(`#toDoNoteForm${project.dataset.id}`);
   //    
    //    
    //    const checkbox = DOM.elementInit('input', {'type':'checkbox'});
    //    const label = DOM.elementInit('label', {'for': `${input.value}`},`${input.value}`);
    //    const br = DOM.elementInit('br');

    //    input.value = '';
    //    form.appendChild(checkbox);
    //    form.appendChild(label);
    //    form.appendChild(br);
    //    return
    //}
    

     return {
         createProject,
         createToDoNote,
         revealCreateForm,
         toggleProjectSize,
         chooseNoteType,
         noteTypeGenerator,
         deleteAddNoteForm,
         disableBtns,
         enableBtns,
         removeTempInput
     }
}