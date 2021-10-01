
const game = (function(){

    let container = document.createElement('main');
    container.setAttribute('id','container');
    document.body.appendChild(container);
    let current = [];

    
    const isItADraw = function(gameBoard){
        const isEmpty = function(elem){
         return  elem === '';
        }

      return  gameBoard.every(function(outelem){
            if (outelem.some(isEmpty) === true){ 
                return false
            }
            return true
        })
        
    }
    
    const isItOver = function(gameBoard){
        if (isItADraw(gameBoard)){
            return alert('Game is a draw.')
        }

        //Win By Column
        //Win By Row
        //Win by Diagonal
        
    }

    const currentPlayer = function(current){
        if (current === []){ 
            current.push(game.player1)
            return current[0];
    }
        else if (current[0] === game.player1){
            current.splice(0,1,game.player2)  
            return current[0];
        }

        else {current.splice(0,1,game.player1);
              return current[0];
    }
};
    const populateBlock = function(e){
        game.board.gameBoard[this.id[0]][this.id[1]] = currentPlayer(current);
        e.target.textContent = current[0];
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
                    block.addEventListener('click', populateBlock);
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
        })
        return {player1: player1.value, player2: player2.value}

    })()
    return {
        board, 'player1': choosePlayer.player1, 'player2': choosePlayer.player2
};
})()
