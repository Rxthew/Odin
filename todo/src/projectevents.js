import { events } from "./helpers/events";

let projectEvents = events();

projectEvents.delegator = function(event){
      switch(true){
         case event.target.classList.contains('revealForm') : projectEvents.publish('reveal');
           break;
         case event.target.classList.contains('projectForm'): projectEvents.publish('create', document.querySelector('#titleInp').value);
                                                              projectEvents.publish('saved');
                                                              event.preventDefault();
           break;
         case event.target.classList.contains('project'): projectEvents.publish('view', event);
           break;
         case event.target.classList.contains('itemTitle'): projectEvents.publish('view', event);
           break;           
         case event.target.classList.contains('addtoDoList'): projectEvents.publish('chooseTitle', event)
           break;
         case event.target.classList.contains('chooseTitleForm'): projectEvents.publish('inputOrList', event)
           break;
         case event.target.classList.contains('chooseNoteType'): projectEvents.publish('noteToDoType', event);
                                                                 event.preventDefault();
           break;
         case event.target.classList.contains('cancelTitle') : projectEvents.publish('abortNoteTypeForm', event);
                                                               event.preventDefault();
           break; 
         case event.target.classList.contains('cancelChoice') : projectEvents.publish('abortNoteTypeForm',event);
                                                                event.preventDefault();
           break;
         case event.target.classList.contains('addCheck') : projectEvents.publish('newCheckItem', event);
           break;
         case event.target.classList.contains('addCheckMod') : projectEvents.publish('updateCheckItem', event);
           break;
         case event.target.classList.contains('cancel') : projectEvents.publish('cancelNote',event);
                                                          event.preventDefault()
           break;
         case event.target.classList.contains('edit') : projectEvents.publish('modifyElem',event);
           break;
         case event.target.classList.contains('submitNote') : projectEvents.publish('submitNote', event);
                                                              event.preventDefault();
                                                              projectEvents.publish('saved');
           break;
         case event.target.classList.contains('revertMod') : projectEvents.publish('revert',event);
           break;
         case event.target.classList.contains('submitMod') : projectEvents.publish('submitMod',event);
           break;
         case event.target.classList.contains('remove') : projectEvents.publish('deleteToDoNote', event);
           break;
         case event.target.classList.contains('deleteCheck') : projectEvents.publish('deleteCheck', event);
           break;

      //add more. 

}}
 
       



export { projectEvents }