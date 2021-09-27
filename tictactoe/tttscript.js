
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

    const choosePlayer = function(){
        const form = document.querySelector('#form');
        const player1 = document.querySelector('#O');
        const player2 = document.querySelector('#X');
        const container = document.querySelector('#container');
        form.addEventListener(function(e){
            if (e.target.checked == player2){
                [player1, player2] = [player2, player1];
            }
            form.style.visibilty = 'hidden';
            container.style.visibility = 'visible'; 
            
        })

        return {player1: player1.value, player2: player2.value}

    }

    return {board//, 'player1': choosePlayer.player1, 'player2': choosePlayer.player2
};
})()



