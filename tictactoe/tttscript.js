
const game = (function(){

    let container = document.createElement('main');
    container.setAttribute('id','container');
    document.body.appendChild(container);;
    
    const initDOMBoard = function(gameBoard){
         gameBoard.forEach(
            function(outerElem){
                let row = document.createElement('div');
                row.setAttribute('class','row');
                row.setAttribute('id', `row${gameBoard.indexOf(outerElem)}`);
                container.appendChild(row);
    
                outerElem.forEach(
                    function(elem){
                    let block = document.createElement('span');
                    block.setAttribute('class', 'block');
                    block.setAttribute('id', `${gameBoard.indexOf(outerElem)}${outerElem.indexOf(elem)}`);
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

        return gameBoard
    }());

    const choosePlayer = (function(){

        const form = document.querySelector('#form');
        let player1 = document.querySelector('#O');
        let player2 = document.querySelector('#X');


        const formInputSelect = function(){
            if (player2.checked){
 //               player2.checked = true;
 //               player1.checked = false; Still need to solve this.
                [player1, player2] = [player2, player1];
            }
            return {player1, player2}
            
        }

        const hideForm = function(form){
            return form.style.visibility = 'hidden';
        }

        const revealContainer = function(container){
            return container.style.visibility = 'visible';
        }

        form.addEventListener('submit', function(e){
            e.preventDefault();
            formInputSelect();
            hideForm(form);
            revealContainer(container);
            
        })

        
        return {player1: player1.value, player2: player2.value}

    })()

    return {
        board, 'player1': choosePlayer.player1, 'player2': choosePlayer.player2
};
})()



