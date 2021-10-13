import { baseCreate } from "./helpers/base";
import { projectEvents } from "./projectevents";

//Template for a todo-note 

export const singletoDoNote = function(name){

   toDoNote.name = name;
   _notestorage = new Array();
   const toDoNote = baseCreate(_notestorage);

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

}

//

//Template for a single project

export const singleProj = function(name){

   project.name = name;
   _projstorage = new Array();
   const project = baseCreate(_projstorage);

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

} 

//

//Overall Interface

export const mainInterface = function(){
   
   _overallStorage = new Array();
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
   
   const eventsSubscribed = (function(){
      projectEvents.subscribe('TBDaddEVENTPLACEHOLDER', newProj);
      //add the rest.
   })()
   
}
