const choices = ['rock', 'paper', 'scissor']

let getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

let computerChoice = getComputerChoice()
console.log('Computer choose: ',computerChoice)