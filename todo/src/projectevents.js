import { events } from "./helpers/events";

let projectEvents = events();

projectEvents.headerDelegator = function(event){
     event.target.id === 'revealForm' ? projectEvents.publish('reveal') : false;

}

projectEvents.formDelegator = function(event){
   const name = document.querySelector('#titleInp').value;
   projectEvents.publish('create', name)
   event.preventDefault();
}

projectEvents.localStore = function(func,...optArgs){ 
   optArgs.unshift(func)
   const args = JSON.stringify(optArgs)
   if(!localStorage.getItem('access')) {
   return localStorage.setItem('access', args)
   }

   else{ 
      const addedArgs = localStorage.getItem('access') + ' , ' + args;
      return localStorage.setItem('access', addedArgs)
   } //REVIEW PARSING
}



//projectEvents.projEvntDelegator = function(event){
    
//      switch(event.target.id){
//         case 'removeProject': projectEvents.publish();
//            break;
//         case 'addProject': projectEvents.publish();
//            break;

//      }

//      return
   
      //   switch case statement. If event.target.dataset or
   // other identifier for the button. events.publish
   // the event associated with button. 
   //
   //Remember to include conditionalst and such to prevent
   // firing unless e.g project is expanded or while form
   // is visible.
//}




export { projectEvents }