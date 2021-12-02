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
    const appendToProj = main.appendToProj;
    const removeItem = main.removeItem;
    const appendNoteToItem = main.appendNoteToItem
    const recordCheck = main.recordCheck;
    const deleteCheckFromStorage = main.deleteCheckFromStorage;
    const modifyInStorage = main.modifyInStorage;
    const createProject = structs.createProject;
    const revealCreateForm = structs.revealCreateForm;
    const resetCreateForm = structs.resetCreateForm;
    const toggleSize = structs.toggleSize;
    const chooseToDoTitleForm = structs.chooseToDoTitleForm;
    const submitToDoTitle = structs.submitToDoTitle;
    const chooseNoteType = structs.chooseNoteType;
    const noteTypeGenerator = structs.noteTypeGenerator;
    const deleteForms = structs.deleteForms;
    const disableBtns = structs.disableBtns;
    const createToDoNote = structs.createToDoNote;
    const enableBtns = structs.enableBtns;
    const cleanToDoForm = structs.cleanToDoForm;
    const addNewCheck = structs.addNewCheck;
    const revertModifiedElement = structs.revertModifiedElement;
    const modifyElement = structs.modifyElement;
    const submitItem = structs.submitItem;
    const generateNewAddCheck = structs.generateNewAddCheck;
    const submitModifiedElement = structs.submitModifiedElement;
    const deleteItem = structs.deleteItem;
    const deleteCheck = structs.deleteCheck
    const triggerEvents = structs.triggerEvents;
    const delegator = projectEvents.delegator;

    
    
    //Event Subscriptions
    projectEvents.subscribe('view', toggleSize);
    projectEvents.subscribe('create', createProject);
    projectEvents.subscribe('create', resetCreateForm);
    projectEvents.subscribe('cancelCreateNote', resetCreateForm);
    projectEvents.subscribe('create', newProj);
    projectEvents.subscribe('saved', localStore);
    projectEvents.subscribe('reveal', revealCreateForm);
    projectEvents.subscribe('chooseTitle', disableBtns);
    projectEvents.subscribe('chooseTitle', chooseToDoTitleForm);
    projectEvents.subscribe('inputOrList', submitToDoTitle);
    projectEvents.subscribe('inputOrList', chooseNoteType);
    projectEvents.subscribe('noteToDoType', deleteForms)
    projectEvents.subscribe('noteToDoType', noteTypeGenerator);
    projectEvents.subscribe('deleteNoteTypeForm', appendToProj);
    projectEvents.subscribe('deleteNoteTypeForm', deleteForms);
    projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    projectEvents.subscribe('abortNoteTypeForm', enableBtns);
    projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    projectEvents.subscribe('trigger',triggerEvents);
    projectEvents.subscribe('cancelNote', enableBtns);
    projectEvents.subscribe('cancelNote', cleanToDoForm);        
    projectEvents.subscribe('newCheckItem', addNewCheck);
    projectEvents.subscribe('createNote', createToDoNote);
    projectEvents.subscribe('submitNote', submitItem);
    projectEvents.subscribe('submitNote', enableBtns);
    projectEvents.subscribe('submitNote', appendToProj);
    projectEvents.subscribe('submitNote', appendNoteToItem);
    projectEvents.subscribe('submitNote', cleanToDoForm);
    projectEvents.subscribe('updateCheckItem', generateNewAddCheck);
    projectEvents.subscribe('modifyElem', modifyElement);
    projectEvents.subscribe('revert', revertModifiedElement);
    projectEvents.subscribe('submitMod', modifyInStorage);
    projectEvents.subscribe('submitMod', submitModifiedElement)
    projectEvents.subscribe('delete', removeItem);    
    projectEvents.subscribe('delete', deleteItem);
    projectEvents.subscribe('deleteCheck', deleteCheckFromStorage);
    projectEvents.subscribe('deleteCheck', deleteCheck);
    projectEvents.subscribe('recordCheck', recordCheck);
    
    


    //Initial elements
    const mainContainer = (function(){
    
        const container =  DOM.elementInit('div',{'id':'container'})
        document.body.appendChild(container)
        return container
     
})()

    const header = (function(){
        
        //Initialise elements
        const head = DOM.elementInit('header', {'id':'header'});
        const title = DOM.elementInit('h1',{'id': 'title',
                                            'class': 'headerChild'}, 'Project Manager');
        const revealForm = DOM.elementInit('button',{'class':'revealForm headerChild'},'New Project');
        
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
                                              'class':'none projectForm transitForm'
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
         form.appendChild(DOM.elementInit('button', {  'type' : 'button',
                                                       'class':'cancelNewProject',
                                                       'id':'cancelNewProject'}, 'cancel' ))
         
 
         form.onsubmit = delegator;

         mainContainer.appendChild(form);
         
         const cancel = DOM.selectElem('#cancelNewProject');
         cancel.onclick = delegator;

         return form; 
})()


})()

    