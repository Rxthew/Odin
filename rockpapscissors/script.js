/*Script for five rounds of rock, paper, scissors.
Caveat: doesn't distinguish between an invalid 
input and an actual draw, but it doesn't make
a difference to the final tally so I thought
I'd leave it. */



function computerPlay(){
    return  Math.floor(Math.random()*3);
}

let playRound = function playRound(computerSelection, playerSelection){
    if (computerSelection == 0 && playerSelection.match(/^paper$/i)){
        return 'You Win! Paper beats Rock.'}
    else if (playerSelection.match(/^rock$/i) && computerSelection == 1){
        return 'You Lose! Paper beats Rock.'}
    else if (computerSelection == 0 && playerSelection.match(/^scissors$/i)){
        return 'You Lose! Rock beats Scissors.'} 
    else if (playerSelection.match(/^rock$/i) && computerSelection == 2){
        return 'You Win! Rock beats Scissors.'} 
    else if (computerSelection == 1 && playerSelection.match(/^scissors$/i)){
        return 'You Win! Scissors beats Paper.'}
    else if (playerSelection.match(/^paper$/i) && computerSelection == 2){
        return 'You Lose! Scissors beats Paper.'}
    else {return 'It\'\s a Draw! Try again.'}

}


function Game(){
    let Computer = 0;
    let Player = 0; 
    for (let round = 0; round <= 4; round++){
        let computerSelection = computerPlay();
        let playerSelection = prompt('Choose your weapon: Rock, Paper, or Scissors.');
        let p = playRound(computerSelection, playerSelection);
        alert(p);
        if(p.match(/Win/)){Player++};
        if(p.match(/Lose/)){Computer++;}};
    if (Computer > Player){alert('Final tally: Computer: ' + Computer + ' pts. You: ' + Player + ' pts. Looks like you lost :( Better luck next time!');}
    else if (Player > Computer){alert('Final tally: Computer: ' + Computer + ' pts. You: ' + Player + ' pts. Great job! You win!')}
    else {alert('Final tally: Computer: ' + Computer + ' pts. You: ' + Player + ' pts. Looks like it\'\s a draw. Boring -_-.')}
    
    
}

Game();


