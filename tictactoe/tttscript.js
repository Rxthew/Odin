
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

    const choosePlayer = (function(){
        const form = document.querySelector('#form');
        let player1 = document.querySelector('#O');
        let player2 = document.querySelector('#X');
        const container = document.querySelector('#container');
        form.addEventListener('submit', function(e){
            e.preventDefault()
            if (player2.checked){
                [player1, player2] = [player2, player1];
            }
            form.style.visibility = 'hidden';
            container.style.visibility = 'visible'; 
            console.log(container.style.visibility)
        })

        return {player1: player1.value, player2: player2.value}

    })()

    return {
        board, 'player1': choosePlayer.player1, 'player2': choosePlayer.player2
};
})()



