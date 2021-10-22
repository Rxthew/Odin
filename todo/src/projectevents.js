import { events } from "./helpers/events";

let projectEvents = events();

projectEvents.evtDelegator = function(event){//not working
      switch(event.target.className){
         case 'revealForm': projectEvents.publish('reveal');
           break;
         case 'projectForm': projectEvents.publish('create', document.querySelector('#titleInp').value);
                             projectEvents.publish('saved');
                             event.preventDefault();
           break;
         case 'viewProject': projectEvents.publish('viewProject', event);
           break;
         case 'addtoDoList': projectEvents.publish('inputOrList', event)
           break;
         case 'selectedNoteType': projectEvents.publish('noteToDoType', event)
         break;
      //add more read below. 

}}
 
   //Remember to include conditionalst and such to prevent
   // firing unless e.g project is expanded or while form
   // is visible.
//}




export { projectEvents }