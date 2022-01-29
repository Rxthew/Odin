import {calc} from './calculator.js'

let sum = calc.sum;
let divide = calc.divide;
let maximum = function(a,b){
    if(a > b){
        return a
    }
    return b
}
let minimum = function(a,b){
    if(a<b){
        return a
    }
    return b
}

export const analyse = function(thisArr){
    
    if(Array.isArray(thisArr)){
        
        for(let elem of thisArr){
            if( typeof elem !== 'number' && typeof elem !== 'bigint'){
                return false

        }}

        const length = thisArr.length
        if(length <= 0){return false}
        const average = divide(thisArr.reduce(sum),length)
        const max = thisArr.reduce(maximum);
        const min = thisArr.reduce(minimum)


        return {
            length,
            average,
            max,
            min
        }

    }
    return 
}