export const capitals = function(someString){
    if(someString){
        if(typeof someString !== 'string' || someString.trim().length < 1){
            return
        }
        return someString[0].toUpperCase() + someString.slice(1,).toLowerCase()
    }
    
}
