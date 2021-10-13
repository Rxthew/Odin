import * as projects from './projects';
import { DOMGeneral } from "./helpers/DOM";



const revealToDo = (function(){ 

    const DOM = DOMGeneral();

    const mainContainer = (function(){
    
        const container =  DOM.elementInit('div',{'id':'container'})
        document.body.appendChild(container)
        return container
     
})()

    const header = (function(){
        const head = DOM.elementInit('header', {'id':'header'});
        const title = DOM.elementInit('h1',{'id': 'title'}, 'This is your To-Do list');
        head.appendChild(title);
        mainContainer.appendChild(head);
        return head;
})()


})()

    