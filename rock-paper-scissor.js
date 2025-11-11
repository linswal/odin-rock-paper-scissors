/**
 * Simulates a of game of rock, paper, scissors based humanChoice and
 * computerChoice. Prints the win or lose condition for the human. 
 * 
 * @param {string} humanChoice - rock, paper, or scissors chosen by human.
 * @param {string} computerChoice - rock, paper, or scissors chosen by comp.
*/
const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    
    const playRound = (humanChoice, computerChoice) => {
        let humanChoiceCapitalized = humanChoice[0].toUpperCase() + humanChoice.slice(1);
        
        if (humanChoiceCapitalized === "Rock") {
            if (computerChoice === "Scissors") {
                console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoice}`);
                humanScore++;
            } else if (computerChoice === "Paper") {
                console.log(`You lose! ${humanChoiceCapitalized} loses to ${computerChoice}`);
                computerScore++;
            } else {
                console.log(`You draw! ${humanChoiceCapitalized} ties with ${computerChoice}`);
            };
        } else if (humanChoiceCapitalized === "Paper") {
            if (computerChoice === "Rock") {
                console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoice}`);
                humanScore++;
            } else if (computerChoice === "Scissors") {
                console.log(`You lose! ${humanChoiceCapitalized} loses to ${computerChoice}`);
                computerScore++;
            } else {
                console.log(`You draw! ${humanChoiceCapitalized} ties with ${computerChoice}`);
            };
        } else {
            if (computerChoice === "Paper") {
                console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoice}`);
                humanScore++;
            } else if (computerChoice === "Rock") {
                console.log(`You lose! ${humanChoiceCapitalized} loses to ${computerChoice}`);
                computerScore++;
            } else {
                console.log(`You draw! ${humanChoiceCapitalized} ties with ${computerChoice}`);
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
};


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
    };
};

/**
 * Ask user for a choice of 'rock', 'paper', or 'scissors'.
 * 
 * @returns {string} - user's choice of 'rock', 'paper', or 'scissors'.
*/
function getHumanChoice() {
    userAnswer = prompt("Pick rock, paper, or scissors: ");
    return userAnswer;
};

playGame();