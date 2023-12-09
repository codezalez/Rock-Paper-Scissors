const choices = ['rock', 'paper', 'scissor']

let getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

let computerSelection = getComputerChoice()
console.log('Computer choice: ', computerSelection)
let playerSelection = prompt('Choose rock, paper or scissor: ')
console.log('Player choice: ', playerSelection)

let game = () => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a draw"
    }

    if (playerSelection.toLowerCase() === 'rock') {
        return computerSelection === 'scissor' ? "You win" : "You loose"
    } else if (playerSelection.toLowerCase() === 'paper') {
        return computerSelection === 'rock' ? "You win" : "You loose"
    } else if (playerSelection.toLowerCase() === 'scissor') {
        return computerSelection === 'paper' ? "You win" : "You loose"
    } else {
        return "Wrong input"
    }
}

let result = game()
console.log('Result: ', result)