/*Script for Best out of five in rock, paper, scissors. */



function computerPlay(){
    return  Math.floor(Math.random()*3);
}


let playRound = function playRound(playerSelection){
    let computerSelection = computerPlay();
    if (computerSelection == 0 && playerSelection.target.textContent=="Paper"){
        alert('You Win! Paper beats Rock.')
        return 'Win'}
    else if (playerSelection.target.textContent=="Rock" && computerSelection == 1){
        alert('You Lose! Paper beats Rock.')
        return 'Lose'}
    else if (computerSelection == 0 && playerSelection.target.textContent=="Scissors"){
        alert('You Lose! Rock beats Scissors.')
        return 'Lose'} 
    else if (playerSelection.target.textContent=="Rock" && computerSelection == 2){
        alert('You Win! Rock beats Scissors.')
        return 'Win'} 
    else if (computerSelection == 1 && playerSelection.target.textContent=="Scissors"){
        alert('You Win! Scissors beats Paper.')
        return 'Win'}
    else if (playerSelection.target.textContent=="Paper" && computerSelection == 2){
        alert('You Lose! Scissors beats Paper.')
        return 'Lose'}
    else {alert('It\'\s a Draw! Try again.')
        return 'It\'\s a Draw! Try again.'}

}


function Game(playerSelection){
    let computerScore = document.querySelector('#compscr');
    let yourScore = document.querySelector('#yourscr');

    if (parseInt(yourScore.textContent) <= 4 && parseInt(computerScore.textContent) <=4 && parseInt(computerScore.textContent) + parseInt(yourScore.textContent) < 10){
    let p = playRound(playerSelection);
    if(p.match(/Win/)){yourScore.textContent = parseInt(yourScore.textContent) + 1;
                       if (yourScore.textContent == 5){
                       alert('Congratulations! You Win!');
                       window.location.reload()}}
    if(p.match(/Lose/)){computerScore.textContent = parseInt(computerScore.textContent) + 1;
                       if (computerScore.textContent == 5){
                       alert('You lose this time. Better luck next time!');
                       window.location.reload()}}
    
}

    
}


const container = document.querySelector('#container');
const rock = document.createElement('button');
const scissors = document.createElement('button');
const paper = document.createElement('button');
rock.textContent = 'Rock';
scissors.textContent = 'Scissors';
paper.textContent = 'Paper';


rock.addEventListener('click', Game);
scissors.addEventListener('click', Game);
paper.addEventListener('click', Game);

container.appendChild(rock);
container.appendChild(scissors);
container.appendChild(paper);




