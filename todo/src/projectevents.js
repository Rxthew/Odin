import { events } from "./helpers/events";

let projectEvents = events();

projectEvents.headerDelegator = function(event){
     event.target.id === 'revealForm' ? projectEvents.publish('reveal') : false;

}

projectEvents.formDelegator = function(event){
   const name = document.querySelector('#titleInp').value;
   projectEvents.publish('create', name);
   projectEvents.publish('saved');
   event.preventDefault();
}


projectEvents.evtDelegator = function(event){
      switch(event.target.className){
         case 'viewProject': projectEvents.publish('viewProject', event);
           break;
         case 'addtoDoList': projectEvents.publish('inputOrList', event)
           break;
         case 'selectedNoteType' : projectEvents.publish('noteToDoType', event)
      //add more read below. 

}}
 
   //Remember to include conditionalst and such to prevent
   // firing unless e.g project is expanded or while form
   // is visible.
//}




export { projectEvents }