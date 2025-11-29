/**
 * Randomly and equal select a choice between 'Rock', 'Paper', or Scissors'.
 * 
 * @returns {string} - one of the choices of 'Rock', 'Paper', or 'Scissors'.
 */
function getComputerChoice() {  
    choice = Math.random();
    if (choice <= 0.3) {
        return "Rock";
    } else if (choice >= 0.6) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(event) {
    return event.target.id;
}

function printMessage(result, playerChoice, computerChoice) {
    msg = ''
    if (result === 'win') {
        msg = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (result === 'lose') {
        msg = `You lose! ${playerChoice} loses to ${computerChoice}.`;
    } else {
        msg = `You draw! ${playerChoice} ties with ${computerChoice}.`
    }
    message.textContent = msg;
}

function changeScore(scoreDisplay) {
    let newScore = scoreDisplay.textContent.slice(-1) + 1
    scoreDisplay.textContent[scoreDisplay.textContent.length - 1] = newScore
}

/**
 * Simulates a of round of rock, paper, scissors based humanChoice and
 * computerChoice. Prints the win or lose condition for the human. 
 * 
 * @param {string} humanChoice - rock, paper, or scissors chosen by human.
 * @param {string} computerChoice - rock, paper, or scissors chosen by comp.
*/ 
function playRound (humanChoice, computerChoice) {
    let humanChoiceCapitalized = humanChoice[0].toUpperCase() + humanChoice.slice(1);

    if (playerScore + computerScore === 5) {
        let winner = 'computer'
        if (playerScoreDisplay > computerScoreDisplay) {
            winner = 'player'
        }
        msg = `Final winner is the ${winner}!`;
    } 
    
    if (humanChoiceCapitalized === "Rock") {
        if (computerChoice === "Scissors") {
            printMessage('win', humanChoiceCapitalized, computerChoice);
            changeScore(playerScore);
        } else if (computerChoice === "Paper") {
            printMessage('lose', humanChoiceCapitalized, computerChoice);
            changeScore(computerScore);
        } else {
            printMessage('tie', humanChoiceCapitalized, computerChoice);
        };
    } else if (humanChoiceCapitalized === "Paper") {
        if (computerChoice === "Rock") {
            printMessage('win', humanChoiceCapitalized, computerChoice);
            changeScore(playerScore);
        } else if (computerChoice === "Scissors") {
            printMessage('lose', humanChoiceCapitalized, computerChoice);
            changeScore(computerScore);
        } else {
            printMessage('tie', humanChoiceCapitalized, computerChoice);
        };
    } else {
        if (computerChoice === "Paper") {
            printMessage('win', humanChoiceCapitalized, computerChoice);
            changeScore(playerScore);
        } else if (computerChoice === "Rock") {
            printMessage('lose', humanChoiceCapitalized, computerChoice);
            changeScore(computerScore);
        } else {
            printMessage('tie', humanChoiceCapitalized, computerChoice);
        };
    };
};
    
document.addEventListener('DOMContentLoaded', () => {
    let playerScore = 0;
    let computerScore = 0;
    const playerScoreDisplay = document.querySelector("#player-score");
    const computerScoreDisplay = document.querySelector("#computer-score");
    const message = document.querySelector("#message");
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", (e) => {
        playRound(getHumanChoice(e), getComputerChoice())
    });
    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", (e) => {
        playRound(getHumanChoice(e), getComputerChoice())
    });
    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", (e) => {
        playRound(getHumanChoice(e), getComputerChoice())
    });
})
