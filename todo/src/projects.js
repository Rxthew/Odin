import { baseCreate } from "./helpers/base";


//Template for a todo-note 

export const singletoDoNote = function(name){


   const noteStorage = new Array();
   const toDoNote = baseCreate(noteStorage);
   
   const addNote = function(note){
      toDoNote.add(note);
   }

   const removeNote = function(index){
      const note = _notestorage[index];
      toDoNote.remove(note, index);  
   }

   const moveNote = function(index, target){
      toDoNote.move(index, target);
        
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
    
   const moveProj = function(index, target){
      allToDo.move(index, target);

   }
   
   const transferToLocalStorage = function(){
         return localStorage.setItem('access', JSON.stringify(_overallStorage))
   }

   const _findProj = function(event){
      const proj = event.target.closest('.project')
      return proj.dataset.id
   }

   const _findToDo = function(event){
      const toDo = event.target.closest('.toDoNoteInput')
      return toDo.dataset.id
   }


   const appendToProj = function(event){
      const index = _findProj(event);
      const currentProj = _overallStorage[index];
      const form = event.target.parentElement;      
      const domProject = form.parentElement.parentElement;

      const formChildren = Array.from(form.children);
      const title = formChildren.filter(child =>  child.id === `itemTitle${domProject.dataset.id}${form.dataset.id}`)
      const name = title[0].firstChild.nodeValue;
      


      if (currentProj.projStorage.length - 1 == form.dataset.id){
         return
      }
      currentProj.addToProject(name)
      
      return

   }

   const appendNoteToItem = function(event){
      const projIndex = _findProj(event);
      const toDoIndex = _findToDo(event);
      const currentToDo = _overallStorage[projIndex].projStorage[toDoIndex];
      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      



      const note = function(){ 
        if( form.classList.contains('checkbox')){

        const labels = formChildren.filter(child => child.classList.contains('edit'));
        const currentLabel = labels[labels.length - 1];

         return  {'check': false,
                   'label': currentLabel.firstChild.nodeValue}
        }
        else {

        const texts = formChildren.filter(child => child.classList.contains('text')) 
        const currentText = texts[texts.length - 1];
        
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
  
   
   return {
      newProj,
      transferToLocalStorage,
      appendToProj,
      removeItem,
      appendNoteToItem,
      recordCheck,
      deleteCheckFromStorage
      //just this for now.
   }
  
   
}

