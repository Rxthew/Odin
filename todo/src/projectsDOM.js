import { DOMGeneral } from "./helpers/DOM";
import { projectEvents } from "./projectevents";


export const templateDOMStructs = function (){

    const DOM = DOMGeneral()
    const evtDelegator = projectEvents.evtDelegator

    const projButtons = function(){
        
        const viewProjectBtn = DOM.elementInit('button', {'id':'viewProjectBtn'}, 'View Inside');
        const addToDoListBtn = DOM.elementInit('button', {'id': 'addtoDoListBtn'}, 'Add To-Do List');
        
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
                                             'class': 'project'},name
                                             )
        proj.appendChild(projButtons().viewProjectBtn);
        proj.appendChild(projButtons().addToDoListBtn);
        
        
        //attach event listener to proj.[projevntdelegator]
        proj.onclick = evtDelegator;
        //this delegated to buttons.                                     
        //add buttons as children re: adding to do, collapsing etc. above                                                                          
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        return proj

     }

     const createToDoNote = function (){

     }
     
     const revealCreateForm = function(){
        let hidden = DOM.selectElem('#createForm');
        hidden.classList.toggle('hidden', false);
        
     }

     const toggleProjectSize = function(){
         //toggle class to expand/collapse project & reveal
         //todos. 
     }

     return {
         createProject,
         createToDoNote,
         revealCreateForm
     }
}