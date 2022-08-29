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