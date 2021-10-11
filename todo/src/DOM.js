const DOM = function(){
    
    const elementInit = function(elem, attrsObj={},textString=''){
        document.createElement(elem);
        
        if (Object.keys(attrsObj).length > 0){
            Object.keys(attrsObj).forEach(function(att){
            elem.setAttribute(att, attrsObj[att])
        })
    }   
        if(textString.length > 0){
            elem.textContent = textString;
        }

        return {
            elem
        }

    }

   const selectELem = function(selectorString){
       if(selectorString[0] === '#'){
           return document.querySelector(selectorString)
       }
       else {
           return document.querySelectorAll(selectorString);
       }
   }

   const appendElem = function(parent, child){
       parent.appendChild(child)

   }


}

