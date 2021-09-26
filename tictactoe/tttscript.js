
const game = (function(){
    const board = (function(){
        let gameBoard = [['','',''],
                         ['','',''],
                         ['','','']];

        const container = document.createElement('main');
        container.setAttribute('id','container');
        document.body.appendChild(container);

        gameBoard.forEach(
            function(outelem){
                let row = document.createElement('div');
                row.setAttribute('class','row');
                row.setAttribute('id', `row${gameBoard.indexOf(outelem)}`);
                container.appendChild(row);

                outelem.forEach(
                    function(elem){
                    let block = document.createElement('span');
                    block.setAttribute('id', `${gameBoard.indexOf(outelem)}${outelem.indexOf(elem)}`);
                    row.appendChild(block);
                })
            }
        )

        return gameBoard
    }());
    
    const player = function(symbol){
        return {symbol}
    };

    const choosePlayer = function(){}

    return {board//, 'player1': player(player1), 'player2': player(player2)
};
})()



