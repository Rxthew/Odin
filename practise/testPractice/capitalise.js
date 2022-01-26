export const capitals = function(someString){
    if(someString){
        if(someString.length < 1 || typeof someString !== 'string'){
            return
        }
        return someString[0].toUpperCase() + someString.slice(1,).toLowerCase()
    }
    
}
