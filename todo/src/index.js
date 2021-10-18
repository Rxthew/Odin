import * as projects from './projects';
import { DOMGeneral } from "./helpers/DOM";
import { templateDOMStructs } from './projectsDOM';
import './style.css';
import { projectEvents } from './projectevents';


const revealToDo = (function(){ 

    const DOM = DOMGeneral();
    const structs = templateDOMStructs();
    const newProj = projects.mainInterface().newProj
    const createProject = structs.createProject

    //events
    const headEvent = projectEvents.headerDelegator;
    const formEvent = projectEvents.formDelegator;
    const localStore = projectEvents.localStore;
    //more events here please

    //one-time events
    const revealCreateForm = function(){
        let hidden = DOM.selectElem('#createForm');
        hidden.classList.toggle('hidden', false);
        
}
    


    //Initial elements
    const mainContainer = (function(){
    
        const container =  DOM.elementInit('div',{'id':'container'})
        document.body.appendChild(container)
        return container
     
})()

    const header = (function(){
        
        //Initialise elements
        const head = DOM.elementInit('header', {'id':'header'});
        const title = DOM.elementInit('h1',{'id': 'title'}, 'This is your To-Do list');
        const revealForm = DOM.elementInit('button',{'id':'revealForm'},'New Project');
        
        //Add header event listener
        head.onclick = headEvent;
        
        //Append to document
        head.appendChild(title);
        head.appendChild(revealForm);
        mainContainer.appendChild(head);

        return head;
})()
    
    const defaultProject = (function(){
        
    })()

    
    const renderLocalStorage = function(){
        //This will use localStorage to check
        //if the user has any saved instances
        //of projects and render them if so. 
        //Remember to take account the case for empty lists
    }


     
    const createForm = (function(){
         const form = DOM.elementInit('form',{'id':'createForm',
                                               'class':'hidden'
                                            });
         form.appendChild(DOM.elementInit('br'));                                   
         form.appendChild(DOM.elementInit('label',{'for':'titleInp'},'Project Title'))
         form.appendChild(DOM.elementInit('br'));
         form.appendChild(DOM.elementInit('input',{'type':'text',
                                                    'id' : 'titleInp',        
                                                    'name':'titleInp'}));
         form.appendChild(DOM.elementInit('button',{'type':'submit',
                                                      'id':'submit'},'submit'));
         
                                                      
         projectEvents.subscribe('create', createProject);
         projectEvents.subscribe('create', newProj);
         projectEvents.subscribe('saved', localStore);
         projectEvents.subscribe('reveal', revealCreateForm);
 
         form.onsubmit = formEvent;
         mainContainer.appendChild(form);
         return form; 
})()
     

})()

    