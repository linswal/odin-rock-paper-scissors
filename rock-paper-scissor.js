let humanScore = 0;
let computerScore;

const playRound = (humanChoice, computerChoice) => {
    let humanChoiceCapitalized = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    
    if (humanChoiceCapitalized === "Rock") {
        if (computerChoice === "Scissors") {
            console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoice}`);
        } else if (computerChoice === "Paper") {
            console.log(`You lose! ${humanChoiceCapitalized} loses to ${computerChoice}`);
        } else {
            console.log(`You draw! ${humanChoiceCapitalized} ties with ${computerChoice}`);
        };
    } else if (humanChoiceCapitalized === "Paper") {
        if (computerChoice === "Rock") {
            console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoice}`);
        } else if (computerChoice === "Scissors") {
            console.log(`You lose! ${humanChoiceCapitalized} loses to ${computerChoice}`);
        } else {
            console.log(`You draw! ${humanChoiceCapitalized} ties with ${computerChoice}`);
        };
    } else {
        if (computerChoice === "Paper") {
            console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoice}`);
        } else if (computerChoice === "Rock") {
            console.log(`You lose! ${humanChoiceCapitalized} loses to ${computerChoice}`);
        } else {
            console.log(`You draw! ${humanChoiceCapitalized} ties with ${computerChoice}`);
        };
    };
};

const getComputerChoice = () => {
    choice = Math.random();
    if (choice <= 0.3) {
        return "Rock";
    } else if (choice >= 0.6) {
        return "Paper";
    } else {
        return "Scissors";
    };
};

const getHumanChoice = () => {
    userAnswer = prompt("Pick rock, paper, or scissors: ");
    return userAnswer;
};

playRound(getHumanChoice(), getComputerChoice());
// console.log(getHumanChoice());

// for (let i = 0; i < 5; i++) {
//     console.log(getComputerChoice())
// }