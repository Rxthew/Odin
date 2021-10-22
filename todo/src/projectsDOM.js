import { DOMGeneral } from "./helpers/DOM";
import { projectEvents } from "./projectevents";


export const templateDOMStructs = function (){

    const DOM = DOMGeneral()
    const evtDelegator = projectEvents.evtDelegator

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

        
        proj.onclick = evtDelegator;
                                                                      
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        return proj

     }

     const createToDoNote = function (){

     }

     const chooseNoteType = function(event){
        const domProject = event.target.parentElement;

        if (domProject.lastElementChild.className === 'chooseNoteType'){
            return
        }

         const form =  DOM.elementInit('form', {'class': 'chooseNoteType'})
         const label = DOM.elementInit('label',{'for':'choooseNoteType'},'Choose Your Note Type');
         const select = DOM.elementInit('select',{'class':'select'});
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

         
         //form.onsubmit
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

     return {
         createProject,
         createToDoNote,
         revealCreateForm,
         toggleProjectSize,
         chooseNoteType,
     }
}