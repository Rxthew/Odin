import { baseCreate } from "./base";
import { projectEvents } from "./Events/projectevents";

const todoStore = function(){
    
    _projstorage = new Array();    

     const project = baseCreate(_projstorage);

     const addToProject = function(toDoNote){
        project.add(toDoNote)
        
     }

     const removeFromProject = function(toDoNote){

     }

     projectEvents.subscribe('TBDaddEVENTPLACEHOLDER', addToProject);
     projectEvents.subscribe('TBDremoveEVENTPLACEHOLDER', addToProject)

///CONTINUE


}