import { DOMGeneral } from "./helpers/DOM";
import { projectEvents } from "./projectevents";


export const templateDOMStructs = function (){

    const DOM = DOMGeneral()

    const projbuttons = function(){
        
        //template for project buttons to be
        //used below. Remember data-attribute
        //event delegation to be used. 
    }

    const createProject = function(name){
         const reference = DOM.selectElem('.project'); 
         const proj = DOM.elementInit('div',{'id': `${name}${reference.length}`,
                                             'class': 'project'},name
                                             )
        //attach event listener to proj.[projevntdelegator]
        //this delegated to buttons.                                     
        //add buttons as children re: adding to do, collapsing etc. above                                                                          
        const container = DOM.selectElem('#container');
        container.appendChild(proj);
        return proj

     }

     const createToDoNote = function (){

     }


     const toggleProjectSize = function(){
         //toggle class to expand/collapse project & reveal
         //todos. 
     }

     return {
         createProject,
         createToDoNote
     }
}