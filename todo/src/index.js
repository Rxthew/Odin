import * as projects from './projects';
import { DOMGeneral } from "./helpers/DOM";



const createContainer = (function(){
    const DOM = DOMGeneral();
    const container =  DOM.elementInit('div',{'id':'container'})
    document.body.appendChild(container)
    return container
     
})()


console.log(createContainer.container)

