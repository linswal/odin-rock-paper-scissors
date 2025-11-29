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

    function updateScoreAndPrintMessage(result, playerChoice, computerChoice) {
        msg = ''
        if (result === 'win') {
            msg = `You win! ${playerChoice} beats ${computerChoice}.`;
            playerScore++;
            playerScoreDisplay.textContent[playerScoreDisplay.textContent.length - 1] = playerScore;
        } else if (result === 'lose') {
            msg = `You lose! ${playerChoice} loses to ${computerChoice}.`;
            computerScore++;
            computerScoreDisplay.textContent[computerScoreDisplay.textContent.length - 1] = computerScore;
        } else {
            msg = `You draw! ${playerChoice} ties with ${computerChoice}.`
        }
        message.textContent = msg;
    }

    /**
     * Simulates a of round of rock, paper, scissors based humanChoice and
     * computerChoice. 
     * 
     * @param {string} humanChoice - rock, paper, or scissors chosen by human.
     * @param {string} computerChoice - rock, paper, or scissors chosen by comp.
    */ 
    function playRound (humanChoice, computerChoice) {
        let humanChoiceCapitalized = humanChoice[0].toUpperCase() + humanChoice.slice(1);

        if (playerScore + computerScore === 5) {
            let winner = 'computer'
            if (playerScore > computerScore) {
                winner = 'player'
            }
            msg = `Final winner is the ${winner}!`;
            message.textContent = msg;
            playerScore = 0;
            computerScore = 0;
        } 
        
        if (humanChoiceCapitalized === "Rock") {
            if (computerChoice === "Scissors") {
                updateScoreAndPrintMessage('win', humanChoiceCapitalized, computerChoice);
            } else if (computerChoice === "Paper") {
                updateScoreAndPrintMessage('lose', humanChoiceCapitalized, computerChoice);
            } else {
                updateScoreAndPrintMessage('tie', humanChoiceCapitalized, computerChoice);
            };
        } else if (humanChoiceCapitalized === "Paper") {
            if (computerChoice === "Rock") {
                updateScoreAndPrintMessage('win', humanChoiceCapitalized, computerChoice);
            } else if (computerChoice === "Scissors") {
                updateScoreAndPrintMessage('lose', humanChoiceCapitalized, computerChoice);
            } else {
                updateScoreAndPrintMessage('tie', humanChoiceCapitalized, computerChoice);
            };
        } else {
            if (computerChoice === "Paper") {
                updateScoreAndPrintMessage('win', humanChoiceCapitalized, computerChoice);
            } else if (computerChoice === "Rock") {
                updateScoreAndPrintMessage('lose', humanChoiceCapitalized, computerChoice);
            } else {
                updateScoreAndPrintMessage('tie', humanChoiceCapitalized, computerChoice);
            };
        };
    };
})
