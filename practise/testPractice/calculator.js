export const calc = (function(){

    const _isNumber = function(p){
        if( typeof p !== 'number' && typeof p !== 'bigint'){
            return NaN
        }
        return p

    };

    const _parameterChecker = function(a,b, ...someFuncs){
        let params = [a,b];
        let results = {};
        for (let elem of params){
            for ( let func of someFuncs){
                let result = func(elem)
                results[String(result)] = result
                if(results.hasOwnProperty('NaN') || results.hasOwnProperty('undefined') || results.hasOwnProperty('null')){
                    return false
                }
            }
        }
        return true
        
    }
    
    const sum = function(a,b){
        let check = _parameterChecker(a,b, _isNumber);
        if(check){
            return parseFloat((a + b).toFixed(10))
        }
        return check 
    };

    const subtract = function(a,b){
        let check = _parameterChecker(a,b, _isNumber);
        if(check){
            return parseFloat((a - b).toFixed(10))
        }
        return check    
        
    }

    const multiply = function (a,b){
        let check = _parameterChecker(a,b, _isNumber);
        if(check){
            return parseFloat((a * b).toFixed(10))
        }
        return check
    }

    const divide = function (a,b){
        let check = _parameterChecker(a,b, _isNumber);
        if(check){
            return parseFloat((a / b).toFixed(10))
        }
        return check
    }

    return {
        sum,
        subtract,
        multiply,
        divide
    }

})()