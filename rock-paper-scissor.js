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

/**
 * Simulates a of round of rock, paper, scissors based humanChoice and
 * computerChoice. Prints the win or lose condition for the human. 
 * 
 * @param {string} humanChoice - rock, paper, or scissors chosen by human.
 * @param {string} computerChoice - rock, paper, or scissors chosen by comp.
*/ 
const playRound = (humanChoice, computerChoice) => {
    let humanChoiceCapitalized = humanChoice[0].toUpperCase() + humanChoice.slice(1);

    
    if (humanChoiceCapitalized === "Rock") {
        if (computerChoice === "Scissors") {
            alert(`You win! ${humanChoiceCapitalized} beats ${computerChoice}`);
            let newScore = playerScore.textContent.slice(-1) + 1
            playerScore.textContent.slice(-1) = newScore
        } else if (computerChoice === "Paper") {
            alert(`You lose! ${humanChoiceCapitalized} loses to ${computerChoice}`);
            let newScore = playerScore.textContent.slice(-1) + 1
            playerScore.textContent.slice(-1) = newScore
        } else {
            alert(`You draw! ${humanChoiceCapitalized} ties with ${computerChoice}`);
        };
    } else if (humanChoiceCapitalized === "Paper") {
        if (computerChoice === "Rock") {
            alert(`You win! ${humanChoiceCapitalized} beats ${computerChoice}`);
            let newScore = playerScore.textContent.slice(-1) + 1
            playerScore.textContent.slice(-1) = newScore
        } else if (computerChoice === "Scissors") {
            alert(`You lose! ${humanChoiceCapitalized} loses to ${computerChoice}`);
            computerScore++;
        } else {
            alert(`You draw! ${humanChoiceCapitalized} ties with ${computerChoice}`);
        };
    } else {
        if (computerChoice === "Paper") {
            alert(`You win! ${humanChoiceCapitalized} beats ${computerChoice}`);
            humanScore++;
        } else if (computerChoice === "Rock") {
            alert(`You lose! ${humanChoiceCapitalized} loses to ${computerChoice}`);
            computerScore++;
        } else {
            alert(`You draw! ${humanChoiceCapitalized} ties with ${computerChoice}`);
        };
    };
};
    
    // for (let i = 0; i < 5; i++) {
    //     playRound(getHumanChoice(), getComputerChoice());
    //     console.log(`Your score is ${humanScore} and the computer score is ${computerScore}.`);
    // };   
    
    // if (humanScore > computerScore) {
    //     console.log(`You win the game! Your final score is ${humanScore}.`);
    //     console.log(`The computer score is ${computerScore}.`);
    // } else if (computerScore > humanScore) {
    //     console.log(`You lost the game! Your final score is ${humanScore}.`);
    //     console.log(`The computer score is ${computerScore}.`);
    // } else {
    //     console.log(`You tied with the computer at a final score of ${humanScore}.`);
    // };




document.addEventListener('DOMContentLoaded', () => {
    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");
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
