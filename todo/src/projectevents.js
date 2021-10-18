import { events } from "./helpers/events";

let projectEvents = events();

projectEvents.headerDelegator = function(event){
     event.target.id === 'revealForm' ? projectEvents.publish('reveal') : false;

}


projectEvents.formDelegator = function(event){
   const name = document.querySelector('#titleInp').value;
   projectEvents.publish('create', name);
   projectEvents.publish('saved', 'createProject', name);
   projectEvents.publish('saved', 'newProj', name);
   event.preventDefault();
}

projectEvents.localStore = function(func,...optArgs){ 
   
   if (!localStorage.getItem('handlers') && !localStorage.getItem('functions')){
      
      let args = JSON.stringify([optArgs]);
      let funcName = JSON.stringify([[func]]); 

      localStorage.setItem('handlers', args);
      localStorage.setItem('functions', funcName);

   return 
}

   else {
     
      let args = JSON.stringify(optArgs);
      let funcName = JSON.stringify([func]); 
      
      let newHandlers = JSON.parse(localStorage.getItem('handlers'));
      let newFunction = JSON.parse(localStorage.getItem('functions'));

      newHandlers.push(args);
      newFunction.push(funcName);

      newHandlers = JSON.stringify(newHandlers);
      newFunction = JSON.stringify(newFunction);

      localStorage.setItem('handlers', newHandlers);
      localStorage.setItem('functions', newFunction);

   return

}
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