const choices = ['rock', 'paper', 'scissor']
let computerScore = 0
let playerScore = 0

let getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

let computerSelection = getComputerChoice()
console.log(`Computer Choice: ${computerSelection}`)

let updateScores = (result) => {
    if (result === "You win") {
        playerScore++
    } else if (result === "You loose") {
        computerScore++
    }
}

let displayScores = () => {
    console.log(`Player Score: ${playerScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

let game = () => {
    let playerSelection = prompt('Choose rock, paper or scissor: ')
    console.log(`Player Choice: ${playerSelection}`)

    if (!choices.includes(playerSelection.toLowerCase())) {
        console.log("Wrong input")
    }
    
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a draw"
    }

    if (playerSelection.toLowerCase() === 'rock') {
        return computerSelection === 'scissor' ? updateScores("You win") : updateScores("You loose")
    } else if (playerSelection.toLowerCase() === 'paper') {
        return computerSelection === 'rock' ? updateScores("You win") : updateScores("You loose")
    } else if (playerSelection.toLowerCase() === 'scissor') {
        return computerSelection === 'paper' ? updateScores("You win") : updateScores("You loose")
    } 

}

game()
displayScores()
