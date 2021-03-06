import * as projects from './projects';
import { DOMGeneral } from "./helpers/DOM";
import { templateDOMStructs } from './projectsDOM';
import './style.css';
import { projectEvents } from './projectevents';


const revealToDo = (function(){ 
    
    //Calling module Objects
    const DOM = DOMGeneral();
    const structs = templateDOMStructs();
    const main = projects.mainInterface;
    
    

    //Module methods to be used
    const newProj = main.newProj;
    const localStore = main.transferToLocalStorage;
    const appendToProj = main.appendToProj;
    const removeItem = main.removeItem;
    const appendNoteToItem = main.appendNoteToItem
    const recordCheck = main.recordCheck;
    const deleteCheckFromStorage = main.deleteCheckFromStorage;
    const modifyInStorage = main.modifyInStorage;
    const createCacheForMoving = main.createCacheForMoving;
    const exhaustCacheForMoving = main.exhaustCacheForMoving;
    const regenBackProj = main.regenBackProj;
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
    const revertModifiedElement = structs.revertModifiedElement;
    const modifyElement = structs.modifyElement;
    const submitItem = structs.submitItem;
    const generateNewAddCheck = structs.generateNewAddCheck;
    const submitModifiedElement = structs.submitModifiedElement;
    const deleteItem = structs.deleteItem;
    const deleteCheck = structs.deleteCheck
    const triggerEvents = structs.triggerEvents;
    const toggleOpaque = structs.toggleOpaque;
    const moveConstruct = structs.moveConstruct;
    const regenFrontProj = structs.regenFrontProj;
    
    const delegator = projectEvents.delegator;

    
    
    //Event Subscriptions
    projectEvents.subscribe('view', toggleSize);
    projectEvents.subscribe('create', createProject);
    projectEvents.subscribe('create', resetCreateForm);
    projectEvents.subscribe('create', toggleOpaque);
    projectEvents.subscribe('create', newProj);
    projectEvents.subscribe('create', enableBtns);   
    projectEvents.subscribe('cancelCreateNote', resetCreateForm);
    projectEvents.subscribe('cancelCreateNote', toggleOpaque); 
    projectEvents.subscribe('cancelCreateNote', enableBtns); 
    projectEvents.subscribe('saved', localStore);
    projectEvents.subscribe('reveal', disableBtns);
    projectEvents.subscribe('reveal', revealCreateForm);
    projectEvents.subscribe('reveal', toggleOpaque);
    projectEvents.subscribe('chooseTitle', disableBtns);
    projectEvents.subscribe('chooseTitle', chooseToDoTitleForm);
    projectEvents.subscribe('chooseTitle', toggleOpaque);
    projectEvents.subscribe('inputOrList', submitToDoTitle);
    projectEvents.subscribe('inputOrList', chooseNoteType);
    projectEvents.subscribe('noteToDoType', deleteForms)
    projectEvents.subscribe('noteToDoType', noteTypeGenerator);
    projectEvents.subscribe('deleteNoteTypeForm', appendToProj);
    projectEvents.subscribe('deleteNoteTypeForm', toggleOpaque);
    projectEvents.subscribe('deleteNoteTypeForm', deleteForms);
    projectEvents.subscribe('cleanForm', cleanToDoForm);
    projectEvents.subscribe('abortNoteTypeForm', toggleOpaque);
    projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    projectEvents.subscribe('abortNoteTypeForm', enableBtns);
    projectEvents.subscribe('abortNoteTypeForm', deleteForms);
    projectEvents.subscribe('trigger',triggerEvents);
    projectEvents.subscribe('cancelNote', enableBtns);
    projectEvents.subscribe('cancelNote', cleanToDoForm);        
    projectEvents.subscribe('newCheckItem', generateNewAddCheck);
    projectEvents.subscribe('createNote', createToDoNote);
    projectEvents.subscribe('submitNote', submitItem);
    projectEvents.subscribe('submitNote', enableBtns);
    projectEvents.subscribe('submitNote', appendToProj);
    projectEvents.subscribe('submitNote', appendNoteToItem);
    projectEvents.subscribe('submitNote', cleanToDoForm);
    projectEvents.subscribe('modifyElem', modifyElement);
    projectEvents.subscribe('revert', revertModifiedElement);
    projectEvents.subscribe('submitMod', modifyInStorage);
    projectEvents.subscribe('submitMod', submitModifiedElement)
    projectEvents.subscribe('delete', removeItem);    
    projectEvents.subscribe('delete', deleteItem);
    projectEvents.subscribe('deleteCheck', deleteCheckFromStorage);
    projectEvents.subscribe('deleteCheck', deleteCheck);
    projectEvents.subscribe('recordCheck', recordCheck);
    projectEvents.subscribe('moveItem', createCacheForMoving);
    projectEvents.subscribe('moveItem', moveConstruct);
    projectEvents.subscribe('moveItem', exhaustCacheForMoving);
    projectEvents.subscribe('regen', regenBackProj);
    projectEvents.subscribe('regen', regenFrontProj);
    projectEvents.subscribe('regen', enableBtns);
    


    //Initial elements
    const mainContainer = (function(){
    
        const mainCont =  DOM.elementInit('div',{'id':'mainContainer'})
        document.body.appendChild(mainCont)
        return mainCont
     
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

const projectsContainer = (function(){
        
    const container =  DOM.elementInit('div',{'id':'container'})

    mainContainer.appendChild(container)
    return container
})()
    
    const defaultProject = (function(){
        //if localStorage.access doesn't exist (as opposed to if the array is empty)
        //render the defaultProject with developer notes
        //Notes to include: 
        //--should have structured backend differently, using a hash map system instead
        // of the index of an array as the elements' id
        //--also titles should be in their own spans, instead of that nasty business
        // with data-classes.
        // --refactor to make everything clearer and more SOLID, maybe remove the DOM module
        //   since it doesn't do much and might cause a lot of confusion
        //--design needs a **lot** of work:
        // -- -- include date-fns
        // -- -- titles font 
        // -- -- buttons
        // -- -- symbol to show whether the project is contracted or expanded
        // -- --  perhaps a function so that the note takes up the entire page and you can focus on that instead 
        //        of having to look at the other notes. 
        
    })()

    
    //The below will use localStorage to check
    //if the user has any saved instances
    //of projects and render them if so. 

    const renderLocalStorage = (function(){
        if (localStorage.access){
            if (localStorage.access.length > 0){
                projectEvents.publish('regen')
            } 
        } 

    })()


     
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
                                                     'class': 'submit none',
                                                      'id':'submitCreateForm'},'submit'));
         form.appendChild(DOM.elementInit('button', {  'type' : 'button',
                                                       'class':'cancelNewProject none',
                                                       'id':'cancelNewProject'}, 'cancel' ))
         
 
         form.onsubmit = delegator;

         mainContainer.appendChild(form);
         
         const cancel = DOM.selectElem('#cancelNewProject');
         cancel.onclick = delegator;

         return form; 
})()


})()

    