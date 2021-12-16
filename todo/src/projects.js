import { baseCreate } from "./helpers/base";
import { projectEvents } from "./projectevents";


//Template for a todo-note 

export const singletoDoNote = function(name){


   const noteStorage = new Array();
   const toDoNote = baseCreate(noteStorage);
   
   const addNote = function(note){
      toDoNote.add(note);
   }
   
   return {toDoNote,
           name,
           noteStorage,
           addNote
           
}
}
//

//Template for a single project

export const singleProj = function(name){

   const projStorage = new Array();
   const project = baseCreate(projStorage);
   
   
   const addToProject = function(name){
      const todo = singletoDoNote(name)
      project.add(todo);
                                       
   }

   const removeFromProject = function(index){
      const todo = projStorage[index];
      project.remove(todo, index);  
   } 

   const movetoDo = function(index, target){
      project.move(index, target);
         
   }

   return {project,
           name,
           addToProject,
           projStorage 
   }

} 

//

//Overall Interface

export const mainInterface = function(){
   
   const _overallStorage = new Array();
   const allToDo = baseCreate(_overallStorage);

   const newProj = function(name){
      const proj = singleProj(name);
      allToDo.add(proj);

   }
       
   const transferToLocalStorage = function(){
         return localStorage.setItem('access', JSON.stringify(_overallStorage))
   }

//The reason _findProj does not use data-id is because that property is immutable, even whilst moving projects
// and only changes when the whole array of projects are regenerated from localStorage. 

   const _findProj = function(event){
      const projIndex = Array.from(document.querySelector('#container').children).filter(child => child.classList.contains('project')).indexOf(event.target.closest('.project'));      
      return projIndex
   }

//The reason _findToDo relies on dataset.id, is that this property needs to be exact as the todo's descendants in the DOM
// sometimes refer to the note in this way. (This is less than ideal and should be refactored).

   const _findToDo = function(event){
      const toDo = event.target.closest('.toDoNoteInput')
      return toDo.dataset.id
   }


   const appendToProj = function(event){
      const index = _findProj(event);
      const domProject = event.target.closest('.project');
      const currentProj = _overallStorage[index];

      const formRetriever = function(){
         const formsContainer = Array.from(domProject.children).filter(child => child.classList.contains('toDoContainer'))[0];
         const allForms = Array.from(formsContainer.children)
      return allForms
    }

      const projectForms =  formRetriever() 
      const form = event.target === document.querySelector('#submitNote') ? event.target.parentElement : projectForms[projectForms.length - 1];
      
      const formChildren = Array.from(form.children);
      const title = formChildren.filter(child =>  child.id === `itemTitle${domProject.dataset.id}${form.dataset.id}`)
      const name = title[0].firstChild.nodeValue;
      const formCount = projectForms.length - 1;
      
      if (currentProj.projStorage.length - 1 == formCount && event.target === document.querySelector('#submitNote')){ 
         return
      }
      
     currentProj.addToProject(name)
      return

   }

   const appendNoteToItem = function(event){

      const input = document.querySelector('#temporaryInput');
      if (input.value === ''){return};

      const projIndex = _findProj(event);
      const toDoIndex = _findToDo(event);
      const currentToDo = _overallStorage[projIndex].projStorage[toDoIndex];
      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      

      const note = function(){ 
        if( form.classList.contains('checkbox')){

        const labels = formChildren.filter(child => child.classList.contains('edit'))
        const currentLabel = labels[labels.length - 1];

         return  {'check': false,
                   'label': currentLabel.firstChild.nodeValue}
        }
        else {

        const texts = formChildren.filter(child => child.classList.contains('text')) 
        const currentText = texts[0];
        
        return currentText.firstChild.nodeValue
       }}
      currentToDo.addNote(note());
      return   
      }

   const removeItem = function(event){
      const index = _findProj(event);
      const proj = _overallStorage[index];
      if (event.target.parentElement.classList.contains('project')){
         allToDo.remove(proj)
         return
         
      }
      else if (event.target.parentElement.classList.contains('toDoNoteInput')){
         const formIndex = _findToDo(event)
         proj.projStorage.splice(formIndex, 1);
         return 

      }

      return

   }


   const recordCheck = function(event){
      const check = event.target;
      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      const formChecks = formChildren.filter(child => child.classList.contains('check'));
      
      const projIndex = _findProj(event);
      const toDoIndex = _findToDo(event);
      const checkboxIndex = formChecks.indexOf(check);
      

      const target = _overallStorage[projIndex].projStorage[toDoIndex].noteStorage[checkboxIndex]
      target.check === false ? target.check = true : target.check = false;
      return
   }

   const deleteCheckFromStorage = function(event){
      const projIndex = _findProj(event);
      const proj = _overallStorage[projIndex];
      const formIndex = _findToDo(event)

      const form = event.target.closest('.toDoNoteInput');
      const formChildren = Array.from(form.children);
      const formLabels = formChildren.filter(child => child.classList.contains('edit'));
      const itemIndex = formLabels.indexOf(event.target.parentElement);

      proj.projStorage[formIndex].noteStorage.splice(itemIndex, 1);
      return
   }

   const modifyInStorage = function(event){
      const input = document.querySelector('#modInput');
      const projIndex = _findProj(event);
      const proj = _overallStorage[projIndex];
      const toDoIndex = event.target.closest('.toDoNoteInput') ? _findToDo(event) : false;
      const toDoNote = toDoIndex ? proj.projStorage[toDoIndex]: false;
      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      const buttonChecker = formChildren.filter(child => child.nodeName == 'BUTTON' && child.classList.contains('disabledEdit'))


      if (buttonChecker.length > 0){
         if (event.target.parentElement.classList.contains('project')){
            proj.name = input.value;
            return 
             
         }
         else if (event.target.parentElement.classList.contains('itemTitle')){
            toDoNote.name = input.value;
            return

         }}
         else {

//Explainer: targetIndex uses the submitMod button as the index of the element,
//because the modifyElem event, which fired prior to this one, replaced the original
//element (the one we're targeting) in the DOM with the 'mod' stuff including event.target (i.e submitMod).

            const targets =  form.classList.contains('freeForm') ? false : formChildren.filter(child => child.classList.contains('disabledEdit') || child === event.target)
            const targetIndex = form.classList.contains('freeForm') ? false : targets.indexOf(event.target)  
            
            form.classList.contains('freeForm') ? toDoNote.noteStorage[0] = input.value : toDoNote.noteStorage[targetIndex].label = input.value;
            return 
         }
               
   }

   const createCacheForMoving = function(event){
      const cache = {};
      cache['projIndex'] = _findProj(event);
      event.target.classList.contains('moveNote') ? cache['noteIndex'] = _findToDo(event) : false
      allToDo.add(cache);
      return
    }

  const exhaustCacheForMoving = function(event){
     

      if (event.type === 'mousedown'){
         document.addEventListener('mouseup', exhaustCacheForMoving, {once:true})
         return
      }
      if (event.type === 'click'){
         return
      }
      
     const target = document.querySelector('.moved'); 
     const cache = _overallStorage[_overallStorage.length - 1];
     const projLocation =  Array.from(document.querySelector('#container').children).filter(child => child.classList.contains('project')).indexOf(target.closest('.project'));
     
     if (target.classList.contains('project')){
      cache.projIndex !== projLocation ? allToDo.move(cache.projIndex,projLocation) : false;
     }
     else if (target.classList.contains('toDoNoteInput')){
        const initProj = _overallStorage[cache.projIndex];
        const movedNote = initProj.projStorage[cache.noteIndex];
        const targetProj = _overallStorage[projLocation];
        const toDoLocation = target.dataset.id

        if(cache.projIndex !== projLocation){
         
         //delete from previous project location
         initProj.projStorage.splice(cache.noteIndex,1);
         
         //insert in new project location
         targetProj.projStorage.splice(toDoLocation,0,movedNote);
           
        }

       else if (cache.noteIndex !== toDoLocation){
         targetProj.projStorage.splice(cache.noteIndex,1);
         targetProj.projStorage.splice(toDoLocation,0,movedNote);
              
      }}

     allToDo.remove(cache)
     projectEvents.publish('saved');
     target.classList.toggle('moved',false);

     return

  }
  
  const regenProj = function(){
          const accessAll = JSON.parse(localStorage.access);
          accessAll.forEach(elem => newProj(elem.name))

  }

  const regenToDoNote = function(){

  }
  
   
   return {
      newProj,
      transferToLocalStorage,
      appendToProj,
      removeItem,
      appendNoteToItem,
      recordCheck,
      deleteCheckFromStorage,
      modifyInStorage,
      createCacheForMoving,
      exhaustCacheForMoving,
      //just this for now.
   }
  
   
}

