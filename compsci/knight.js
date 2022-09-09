const knightBoard = new Map()

const establishLegalMoves = function(slot){
    const column = slot[0]
    const row = slot[1]

    const toNullify = function(arrElem){
        for(let elem of arrElem){
            if(elem >= 9 || elem <= -8){
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
            knightBoard.set([column,row],{
                legalMoves : establishLegalMoves([column,row]),
                contains : null
            })

        }
    }
}
knightBoardPopulator()

