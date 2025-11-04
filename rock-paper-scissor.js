const getComputerChoice = () => {
    choice = Math.random()
    if (choice <= 0.3) {
        return "rock"
    } else if (choice >= 0.6) {
        return "paper"
    } else {
        return "scissors"
    }
}

const getHumanChoice = () => {
    userAnswer = prompt("Pick rock, paper, or scissors: ")
    return userAnswer
}

console.log(getHumanChoice())

// for (let i = 0; i < 5; i++) {
//     console.log(getComputerChoice())
// }