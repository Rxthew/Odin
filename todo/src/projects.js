import { baseCreate } from "./helpers/base";


//Template for a todo-note 

export const singletoDoNote = function(name){


   const _notestorage = new Array();
   const toDoNote = baseCreate(_notestorage);
   
   toDoNote.name = name;
   toDoNote.type = type();
   
   
   const type = function(type='checkbox'){
      return type
   }
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

   const _projstorage = new Array();
   const project = baseCreate(_projstorage);
   project.name = name;

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

   const removeProj = function(index){
      const proj = _overallStorage[index];
      allToDo.remove(proj);
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

   const appendProj = function(event){
      const index = _findProj(event);
      const currentProj = _overallStorage[index];
      const container = document.querySelector(`#container${index}`);
      const form = container.lastElementChild; 
      const name = 'something'
      currentProj.addToProject(name)
      return

   }

  
   
   return {
      newProj,
      transferToLocalStorage,
      appendProj,
      //just this for now.
   }
  
   
}

