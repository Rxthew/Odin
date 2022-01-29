export const caesar = function(someString, shift){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    

    if(typeof someString === 'string' && typeof shift === 'number'){
        
        
        let strArray = someString.split('')
        for(let indx = 0; indx < strArray.length; indx++){
            let referenceIndex = alphabet.indexOf(strArray[indx].toLowerCase()) 
            let toMove =  referenceIndex + shift
            
            if(referenceIndex > -1){ 
                if(toMove >= alphabet.length){
                    toMove = (toMove % (alphabet.length - 1))
                    strArray[indx] = alphabet[toMove - 1]
                }
                else if (toMove < 0){
                    if((toMove * -1) > alphabet.length){
                       toMove = (toMove * -1) % (alphabet.length - 1) 
                       toMove = (alphabet.length) - toMove
                       strArray[indx] = alphabet[toMove]
                    }
                    else{
                        toMove = (alphabet.length) - (-1 * toMove)
                        strArray[indx] = alphabet[toMove]
                    }
                }
                else{            
                 strArray[indx] = alphabet[toMove]
                }
            }
            
        }
        let final = strArray.join('')
        
        return final
        
    }
    return
}