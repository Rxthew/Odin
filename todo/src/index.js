import * as projects from './projects';
import { DOMGeneral } from "./helpers/DOM";
import { templateDOMStructs } from './projectsDOM';
import './style.css';
import { projectEvents } from './projectevents';


const revealToDo = (function(){ 

    const DOM = DOMGeneral();
    const structs = templateDOMStructs();

    //events
    const headEvent = projectEvents.headerDelegator;
    //more events here please


    //Initial elements
    const mainContainer = (function(){
    
        const container =  DOM.elementInit('div',{'id':'container'})
        document.body.appendChild(container)
        return container
     
})()

    const header = (function(){
        
        //Initialise event listeners
        const head = DOM.elementInit('header', {'id':'header'});
        const title = DOM.elementInit('h1',{'id': 'title'}, 'This is your To-Do list');
        const revealForm = DOM.elementInit('button',{'id':'revealForm'},'New Project');
        
        //Add event listener
        head.onclick = headEvent;
        
        //Append to document
        head.appendChild(title);
        head.appendChild(revealForm);
        mainContainer.appendChild(head);

        return head;
})()

    const revealCreateForm = function(){
        let hidden = DOM.selectElem('#createForm');
        hidden.classList.toggle('hidden', false);
        
}
     
    const createForm = (function(){
         const form = DOM.elementInit('form',{'id':'createForm',
                                               'class':'hidden'
                                            });
         form.appendChild(DOM.elementInit('label',{'for':'titleInp'},'Project Title'))
         form.appendChild(DOM.elementInit('input',{'type':'text',
                                                    'id' : 'titleInp',        
                                                    'name':'titleInp'}));
        
         projectEvents.subscribe('reveal', revealCreateForm);
         mainContainer.appendChild(form);
         return form; 
    })()





})()

    