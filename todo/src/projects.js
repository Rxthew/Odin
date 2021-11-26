import { baseCreate } from "./helpers/base";


//Template for a todo-note 

export const singletoDoNote = function(name){


   const noteStorage = new Array();
   const toDoNote = baseCreate(noteStorage);
   toDoNote.noteStorage = noteStorage;

   const type = function(type='checkbox'){
      return type
   }
   
   toDoNote.name = name;
   toDoNote.type = type();
   
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
   
   return toDoNote
}

//

//Template for a single project

export const singleProj = function(name){

   const projStorage = new Array();
   const project = baseCreate(projStorage);
   project.name = name;
   project.projStorage = projStorage

   const addToProject = function(name){
      const todo = singletoDoNote(name)
      project.add(todo);
                                       
   }

   const removeFromProject = function(index){
      const todo = projstorage[index];
      project.remove(todo, index);  
   } 

   const movetoDo = function(index, target){
      project.move(index, target);
         
   }

   return {project,
          addToProject, 
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

   const appendToProj = function(event){
      const index = _findProj(event);
      const currentProj = _overallStorage[index];

      const form = event.target.parentElement;
      const formChildren = Array.from(form.children);
      const title = formChildren.filter(child =>  child.classList.contains('itemTitle'))
      const name = title[0].firstChild.nodeValue;
      currentProj.addToProject(name)
      
      return

   }

   const removeProj = function(event){
      const index = _findProj(event);
      const proj = _overallStorage[index];
      event.target.parentElement.classList.contains('project') ? allToDo.remove(proj): false;

      return

   }
  
   
   return {
      newProj,
      transferToLocalStorage,
      appendToProj,
      removeProj,
      //just this for now.
   }
  
   
}

