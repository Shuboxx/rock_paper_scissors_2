// computer randomly selects rock, paper, or scissors
function computerPlay() {
    const rockPaperScissors = ['rock', 'paper', 'scissors'];
    const randomSelection = Math.floor(Math.random() * rockPaperScissors.length)
    // console.log(rockPaperScissors[randomSelection]);
    return rockPaperScissors[randomSelection];
}

// computerPlay();

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'paper') {
        return ('You lose! Paper beats rock!');
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return ('You win! Rock beats scissors!');
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return ('You lose! Scissors beats paper!');
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return ('You win! Paper beats rock!');
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return ('You win! Scissors beats paper!');
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return ('You lose! Rock beats scissors!');
    } else {
        return ('Tie!');
    }
}

const playerSelection = prompt('Enter rock, paper, or scissors');
const computerSelection = computerPlay();
// console.log(playRound(playerSelection.toLowerCase(), computerSelection));

function game() {
    for(i=1; i<=5; i++) {
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    }
}

game();