const sumRange = function(n){
    if(n <= 1){
        return n
    }
    return n + sumRange(n - 1)

}

const powerFunc = function(x,y){
    if(y === 0){
        return 1
    }
    else {
        return x * powerFunc(x,y - 1)
    }

}

const factorial = function(n){
    if(n <= 1){
        return n
    }
    else {
        return n * factorial(n-1)
    }
}

const all = function(arr,func){
    let n = arr.length
    let ind = n - 1
    if(n === 0){
        return true
    }
    else {
        if(func(arr[ind])){
            if(n <= 1){
                let newArr = [...arr]
                newArr.pop()
                return all(newArr,func)
            }
            else {
                return false
                
            }
        }
    }
    
}

const productOfArray = function(arr){
    let n = arr.length 
    if(n === 0){
        return 1
    }
    else {
        let newArr = [...arr]
        let current = newArr.pop()
        return current * productOfArray(newArr)
    }

}

const checkValues = function(arr,callback,target){
    let len = arr.length
    if(len === 0){
        return false
    }
    else {
        let newArr = [...arr]
        let checked = newArr.pop()
        let checkIfTrue = callback(checked,target)
        if(checkIfTrue){
            return true
        }
        else{
            return checkValues(newArr,callback)
        }
    }

}

const valueInObject = function(val,target){
    if(typeof val === 'object'){
        let allValues = Object.values(val)
        return checkValues(allValues,contain,target)
    }
    else if(val === target){
        return true
    }
    else {
        return false
    }
    
}

