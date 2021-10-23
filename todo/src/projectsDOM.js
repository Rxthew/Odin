import { DOMGeneral } from "./helpers/DOM";
import { projectEvents } from "./projectevents";


export const templateDOMStructs = function (){

    const DOM = DOMGeneral()
    const delegator = projectEvents.delegator

    const projButtons = function(){
        
        const viewProjectBtn = DOM.elementInit('button', {
                                                          'class': 'viewProject'}, 'View Inside');
        const addToDoListBtn = DOM.elementInit('button', {'class': 'addtoDoList'}, 'Add To-Do List');
        
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
                                             'data-id': `${reference.length}`, 
                                             'class': 'project'},name
                                             )
        proj.appendChild(projButtons().viewProjectBtn);
        proj.appendChild(DOM.elementInit('div',{ 'class':'none'}));
        proj.appendChild(projButtons().addToDoListBtn);

        
        proj.onclick = delegator;
                                                                      
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        return proj

     }

     const createToDoNote = function (){
       //remember to replace input.
       //also you need to place it in the div which is not displayed.
        

     }

     const chooseNoteType = function(event){
        const domProject = event.target.parentElement;

        if (domProject.lastElementChild.className === 'chooseNoteType'){
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
        
        const project = DOM.selectElem('#noteTypeForm').parentElement;
        projectEvents.publish('deleteNoteTypeForm');
        
        const form = DOM.elementInit('form',{})//continue
        const submit = DOM.elementInit('button',{'type':'submit',
                                                  'class':'submitNote'},'Submit Note')
        form.onsubmit = delegator; 

        const generateChecklist = function(){
            const checkbox = DOM.elementInit('input',{'type':'checkbox'});
            const label = DOM.elementInit('input',{'type':'text'});
            const Add = DOM.elementInit('button', {'class': 'addCheck'},'Add item');
            Add.onclick = delegator;
            form.appendChild(checkbox);
            form.appendChild(label);
            form.appendChild(Add);
            form.appendChild(submit);
            project.appendChild(form);

        };

        const generatefreeForm = function(){
            const freeForm = DOM.elementInit('input',{'type':'text'});
            form.appendChild(freeForm);
            form.appendChild(submit);
            project.appendChild(form);
            

        };
          
        return getSelected === 'Checklist' ? generateChecklist() : generatefreeForm() 

     }


     
    


    //continue getSelected === 'Checklist' ? return generateChecklist : return generatefreeForm 


     const deleteAddNoteForm = function(){
         const deleted = DOM.selectElem('#noteTypeForm');
         deleted.remove();
    }


    

     return {
         createProject,
         createToDoNote,
         revealCreateForm,
         toggleProjectSize,
         chooseNoteType,
         noteTypeGenerator,
         deleteAddNoteForm
     }
}