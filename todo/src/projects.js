import { baseCreate } from "./helpers/base";
import { projectEvents } from "./projectevents";

const todoStore = function(){
    
    _projstorage = new Array();    

     const project = baseCreate(_projstorage);

     const addToProject = function(toDoNote){
        project.add(toDoNote)
        
     }

     const removeFromProject = function(toDoNote){
        

     }

     const moveProjLocation = function(){

     }

     projectEvents.subscribe('TBDaddEVENTPLACEHOLDER', addToProject);
     projectEvents.subscribe('TBDremoveEVENTPLACEHOLDER', addToProject)
     projectEvents.subscribe('TBDmoveEVENTPLACEHOLDER', addToProject)    
///CONTINUE


}