import { DOMGeneral } from "./helpers/DOM";
import { projectEvents } from "./projectevents";


export const templateDOMStructs = function (){

    const DOM = DOMGeneral()
    const delegator = projectEvents.delegator

    const projButtons = function(){
        
        const viewProjectBtn = DOM.elementInit('button', {'class': 'viewProject'}, 'View Inside');
        const addToDoListBtn = DOM.elementInit('button', {'class': 'addtoDoList',
                                                           'id': `add${DOM.selectElem('.project').length}`}, 'Add To-Do List');
        
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
       const input = DOM.selectElem('#temporaryInput').value;

       //This is the form 
       //const form = DOM.elementInit('form',{'class': 'toDoNoteInput'})//continue
       //const submit = DOM.elementInit('button',{'type':'submit',
       //                                          'class':'submitNote'},'Submit Note')
       //form.onsubmit = delegator;
        

       

       //before chosen type you have to transfer the submit note
       // button thing into here. Submit note is the final piece of
       // the jigsaw, and it shouldn't be in noteType.


       //Next, you check for chosen type and if freeform: Put the
       //submit note button as part of a form and once that event goes
       // temporary input is transformed into some text content. 

       //if generateChecklist. then do the same as above...
        
       //at the end reenable the addtodo button


       //const project = DOM.selectElem('#noteTypeForm').parentElement;
       //const container = DOM.selectElem(`#container${project.dataset.id}`);
       //projectEvents.publish('deleteNoteTypeForm');
       
       
       //const form = DOM.elementInit('form',{'class': 'toDoNoteInput'})//continue
       //const submit = DOM.elementInit('button',{'type':'submit',
       //                                          'class':'submitNote'},'Submit Note')
       //form.onsubmit = delegator; 

       //const generateChecklist = function(){
       //const checkbox = DOM.elementInit('input',{'type':'checkbox'});//generate check
       // const label = DOM.elementInit('input',{'type':'text',
       //                                        'class': 'label'});
       // const add = DOM.elementInit('button', {'class': 'addCheck'},'Add item');
       // add.onclick = delegator;
       // form.appendChild(add);
       // form.appendChild(checkbox);
       // form.appendChild(label);
       // form.appendChild(submit);

        
       // container.classList.toggle('none', false);
        
       // container.appendChild(form);
        
    //};

    //const generatefreeForm = function(){
     //   const freeForm = DOM.elementInit('input',{'type':'text'});
     //   form.appendChild(freeForm);
     //   form.appendChild(submit);
        
        
     //   container.classList.toggle('none', false);
                    
     //   container.appendChild(form);

   // };

    //continue getSelected === 'Checklist' ? return generateChecklist : return generatefreeForm    

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

        //What this will do: 
        //projectEvents.publish('deleteNoteTypeForm');
        //projectEvents.publish('createNoteThing', getSelected)
        //disableaddtodo() subscirbed to deleteNotetypeform event,
        //in index.js probably.  
        //return DOM.initElem #temporary input 

        //remember createnote thing will apply to the backend as well,
        // so when you pass in that argument, that's when the 'type'
        // of the note will be stored in there. 
        

        const project = DOM.selectElem('#noteTypeForm').parentElement;
        const container = DOM.selectElem(`#container${project.dataset.id}`);
        projectEvents.publish('deleteNoteTypeForm');
        
        
        const form = DOM.elementInit('form',{'class': 'toDoNoteInput'})//continue
        const submit = DOM.elementInit('button',{'type':'submit',
                                                  'class':'submitNote'},'Submit Note')
        form.onsubmit = delegator; 




        const generateChecklist = function(){
            const checkbox = DOM.elementInit('input',{'type':'checkbox'});//generate check
            const label = DOM.elementInit('input',{'type':'text',
                                                   'class': 'label'});
            const add = DOM.elementInit('button', {'class': 'addCheck'},'Add item');
            add.onclick = delegator;
            form.appendChild(add);
            form.appendChild(checkbox);
            form.appendChild(label);
            form.appendChild(submit);

            
            container.classList.toggle('none', false);
            
            container.appendChild(form);
            
        };

        const generatefreeForm = function(){
            const freeForm = DOM.elementInit('input',{'type':'text'});
            form.appendChild(freeForm);
            form.appendChild(submit);
            
            
            container.classList.toggle('none', false);
                        
            container.appendChild(form);

        };
          
        
        return getSelected === 'Checklist' ? generateChecklist() : generatefreeForm() 

     }



    const deleteAddNoteForm = function(){
         const deleted = DOM.selectElem('#noteTypeForm');
         deleted.remove();
    }

    const disableAddToDoBtn = function(){
        const selectButton =  DOM.selectElem(`#add${project.dataset.id}`);
        return selectButton.classList.toggle('none',true);
     }
    

     return {
         createProject,
         createToDoNote,
         revealCreateForm,
         toggleProjectSize,
         chooseNoteType,
         noteTypeGenerator,
         deleteAddNoteForm,
         disableAddToDoBtn,
     }
}