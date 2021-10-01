
const game = (function(){

    let container = document.createElement('main');
    container.setAttribute('id','container');
    document.body.appendChild(container);
    let current = [];

    
    const isItADraw = function(gameBoard){
        const isEmpty = function(elem){
         return  elem === '';
        }

      return gameBoard.every(function(outelem){
            if (outelem.some(isEmpty) === true){ 
                return false
            }
            return true
        })
    }

    const columnWin = function(gameBoard){
        for(let index = 0;index < gameBoard.length;index++){
        let column = [];
        gameBoard.forEach(function(outelem){
            column.push(outelem[index]);
        });
        console.log(column);
        if (column[0] === column[1] && column[1] === column[2] && column[2] !== ''){
            return true;
        }
        else if (index == gameBoard.length){
            return false
        }}
    }

    const rowWin = function(gameBoard){
        return gameBoard.some(function(outelem){
            if(outelem[0] === outelem[1] && outelem[1] === outelem[2] && outelem[2] !== ''){ 
                return true
            }
            return false
        })

    }

    const crossWin = function(gameBoard){
        if (gameBoard[1][1] === ''){
            return false
        }
        else if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]){
            return true
        }
        else if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]){
            return true
        }
        else {
            return false
        }

    }
    

    const isItOver = function(gameBoard){
        if (isItADraw(gameBoard)){
            return alert('Alas! This game is a stalemate.')
        }
        else if (rowWin(gameBoard)){
            return alert(`The winner is ${current[0]}`)
        }
        else if (columnWin(gameBoard)){
            return alert(`The winner is ${current[0]}`)
        }
        else if (crossWin(gameBoard)){
            return alert(`The winner is ${current[0]}`)
        }
    }

    const currentPlayer = function(current){
        if (current === []){
            current.push('Player 1') 
            current.push(game.player1)
            return current[1];
    }
        else if (current[1] === game.player1){
            current.splice(0,2,'Player 2', game.player2)  
            return current[1];
        }

        else {
            current.splice(0,2,'Player 1', game.player1)  
            return current[1];
    }
};
    const populateBlock = function(e){
        game.board.gameBoard[this.id[0]][this.id[1]] = currentPlayer(current); //need to fix it so can't switch
        e.target.textContent = current[1];
        isItOver(game.board.gameBoard);
    }
    
    const initDOMBoard = function(gameBoard){
         gameBoard.forEach(
            function(outerElem, outIndex){
                let row = document.createElement('div');
                row.setAttribute('class','row');
                row.setAttribute('id', `row${outIndex}`);
                container.appendChild(row);
    
                outerElem.forEach(
                    function(elem, elemIndex){
                    let block = document.createElement('span');
                    block.setAttribute('class', 'block');
                    block.setAttribute('id', `${outIndex}${elemIndex}`);
                    block.addEventListener('click', populateBlock, {once: true});
                    row.appendChild(block);
                    })
                }
            )   
        }

    
    
    const board = (function(){
        let gameBoard = [['','',''],
                         ['','',''],
                         ['','','']];

        initDOMBoard(gameBoard);

        return {gameBoard}
    }());

    const choosePlayer = (function(){

        const form = document.querySelector('#form');
        let player1 = document.querySelector('#O');
        let player2 = document.querySelector('#X');
        player1.checked = true;

        const formInputSelect = function(){
            if (player2.checked){
                [player1, player2] = [player2, player1];
                [game.player1, game.player2] = [player1.value,player2.value];
            }
            
        }

        const hideForm = function(form){
            return form.style.visibility = 'hidden';
        }

        const revealContainer = function(container){
            return container.style.visibility = 'visible';
        }

        form.addEventListener('submit', function(e){
            e.preventDefault();
            formInputSelect()
            hideForm(form);
            revealContainer(container);
        }, {once: true})
        return {player1: player1.value, player2: player2.value}

    })()
    return {
        board, 'player1': choosePlayer.player1, 'player2': choosePlayer.player2
};
})()
