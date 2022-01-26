export const reverseString = function(someString){
    if(someString && typeof someString === 'string' && someString.trim().length >= 1){
        let someStringArr = someString.split('');
        let reversedString = someStringArr.reverse().join('');
        return reversedString            
        }
    return
}