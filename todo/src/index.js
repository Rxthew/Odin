import * as projects from './projects';
import { DOMGeneral } from "./helpers/DOM";
import { templateDOMStructs } from './projectsDOM';
import './style.css';
import { projectEvents } from './projectevents';


const revealToDo = (function(){ 
    
    //Calling module Objects
    const DOM = DOMGeneral();
    const structs = templateDOMStructs();
    const main = projects.mainInterface();
    

    //Module methods to be used
    const newProj = main.newProj;
    const localStore = main.transferToLocalStorage;
    const createProject = structs.createProject;
    const revealCreateForm = structs.revealCreateForm;
    const toggleProjectSize = structs.toggleProjectSize;
    const chooseNoteType = structs.chooseNoteType;
    const noteTypeGenerator = structs.noteTypeGenerator;
    const deleteAddNoteForm = structs.deleteAddNoteForm;
    const disableBtns = structs.disableBtns;
    const createToDoNote = structs.createToDoNote;
    const enableBtns = structs.enableBtns;
    const cleanToDoForm = structs.cleanToDoForm;
    const checkContent = structs.checkContent;
    const cancelNote = structs.cancelNote;
    const revertModifiedNote = structs.revertModifiedNote;
    const modifyToDoNote = structs.modifyToDoNote;
    const submitCheck = structs.submitCheck;
    const submitTextItem = structs.submitTextItem;
    const generateNewAddCheck = structs.generateNewAddCheck;
    const submitModifiedNote = structs.submitModifiedNote;
    const delegator = projectEvents.delegator;

    
    
    //Event Subscriptions
    projectEvents.subscribe('viewProject', toggleProjectSize);
    projectEvents.subscribe('create', createProject);
    projectEvents.subscribe('create', newProj);
    projectEvents.subscribe('saved', localStore);
    projectEvents.subscribe('reveal', revealCreateForm);
    projectEvents.subscribe('inputOrList', chooseNoteType);
    projectEvents.subscribe('noteToDoType', noteTypeGenerator);
    //projectEvents.subscribe('noteToDoType', function Store selected type to be retrieved by backend later.)
    projectEvents.subscribe('deleteNoteTypeForm', disableBtns);
    projectEvents.subscribe('deleteNoteTypeForm', deleteAddNoteForm);
    projectEvents.subscribe('abortNoteTypeForm', deleteAddNoteForm);
    projectEvents.subscribe('abortNoteTypeForm', enableBtns);
    projectEvents.subscribe('populateTempInput', checkContent);
    projectEvents.subscribe('cancelNote', cancelNote);
    projectEvents.subscribe('newCheckItem', submitCheck);
    //projectEvents.subscribe('createNote', functionRe:BackendUpdate  with user submission & including type chosen && whether items are checked or not (if checkbox), remember localStorage update as well.)
    projectEvents.subscribe('createNote', createToDoNote);
    projectEvents.subscribe('submitNote', submitTextItem);
    projectEvents.subscribe('submitNote', enableBtns);
    projectEvents.subscribe('submitNote', cleanToDoForm);
    projectEvents.subscribe('updateCheckItem', generateNewAddCheck);
    projectEvents.subscribe('modifyNote', modifyToDoNote);
    projectEvents.subscribe('revert', revertModifiedNote);
    projectEvents.subscribe('submitModNote', submitModifiedNote)
    


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
        const revealForm = DOM.elementInit('button',{'class':'revealForm'},'New Project');
        
        //Add header event listener
        head.onclick = delegator;
        
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
        //Remember to take account any differences in data between backend and DOM
    }


     
    const createForm = (function(){
         const form = DOM.elementInit('form',{'id':'createForm',
                                              'class':'hidden projectForm'
                                            });
         form.appendChild(DOM.elementInit('br'));                                   
         form.appendChild(DOM.elementInit('label',{'for':'titleInp'},'Project Title'))
         form.appendChild(DOM.elementInit('br'));
         form.appendChild(DOM.elementInit('input',{'type':'text',
                                                    'id' : 'titleInp',
                                                    'autocomplete': 'off',        
                                                    'name':'titleInp'}));
         form.appendChild(DOM.elementInit('button',{'type':'submit',
                                                     'class': 'submit',
                                                      'id':'submit'},'submit'));
         
 
         form.onsubmit = delegator;
         mainContainer.appendChild(form);
         return form; 
})()
     

})()

    