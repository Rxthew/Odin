const knightBoard = new Map()

const establishLegalMoves = function(slot){
    const column = slot[0]
    const row = slot[1]

    const toNullify = function(arrElem){
        for(let elem of arrElem){
            if(elem >= 9 || elem <= 0){
                return true
            }
        }
        return false

    }
        
    let moves = []
    const operations = [1,2,-1,-2]
    const secondOps = [...operations].reverse()

    for(let x = 0; x <= 3; x++){
        moves.push([column])
        let current = moves[moves.length - 1]
        current[0] += operations[x] 
        current.push(row)
        current[1] += secondOps[x]
        if(toNullify(current)){
            moves[moves.length - 1] = null
        }
        moves.push([current[0]])
        current = moves[moves.length - 1]
        current.push(row)
        current[1] -= secondOps[x]
        if(toNullify(current)){
            moves[moves.length - 1] = null
        }
        
    
    }
    moves = moves.filter(elem => elem !== null)
    return moves  

}
const knightBoardPopulator = function(){
    for(let column = 1; column <= 8;column++){ 
        for(let row = 1; row <=8; row++){
            let reference = column.toString() + ',' + row.toString()
            knightBoard.set(reference,{
                legalMoves : establishLegalMoves([column,row]),
                contains : null
            })

        }
    }
}
knightBoardPopulator()

const generatePaths = function(start){
    let visited = []
    let paths = {root : start, 1 : {[start] : knightBoard.get(start).legalMoves.map(elem => `${elem[0]},${elem[1]}`)}}
    let layer = 1
    let cache = [[start,knightBoard.get(start).legalMoves]]
    const firstMark = cache[0][1][cache[0][1].length - 1]
    let newLayerMark = firstMark[0].toString() + ',' + firstMark[1].toString()
    let nextLayer = {}
    

    while(cache.length !== 0){
        let searching = cache[0][1]
        if(searching.length > 0 && !visited.includes(cache[0][0])){   
            searching.forEach(function(elem){
                let key = `${elem[0]},${elem[1]}`
                if(!visited.includes(key)){
                    cache.push([key,knightBoard.get(key).legalMoves])
                }
            })
            let explored = cache.shift()[0]
            visited.push(explored)
            if(newLayerMark === explored){
                layer += 1
                newLayerMark = cache[cache.length - 1][0]
                paths[layer] = nextLayer
                nextLayer = {}
            }
            else{
                if(explored !== start){
                    nextLayer[explored] = searching.map(elem => `${elem[0]},${elem[1]}`)
                }
               
            }
        }
        else{
            cache.shift()
        }
    }
    return paths

}
console.log(generatePaths('8,4'))

