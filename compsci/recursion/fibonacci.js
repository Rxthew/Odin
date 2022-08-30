const iterativeFibo = function(val){
    let fiboArr = []
    for(let currentVal = 0; currentVal < val; currentVal++){
        if(fiboArr.length < 2){
            fiboArr.push(currentVal)
        }
        else{
            let sum = fiboArr[currentVal - 1] + fiboArr[currentVal - 2]
            fiboArr.push(sum)
        }
    }
    return fiboArr
}

console.log(iterativeFibo(8))

const recursiveFibo = function(val){
    if(val <= 2){
        let fiboArr = [0,1]
        return fiboArr
    }
    else{
        let first = recursiveFibo(val - 1) 
        let sum = first[first.length - 1] + first[first.length - 2]
        first = [...first, sum]

        return first
    }

}

console.log(recursiveFibo(8))