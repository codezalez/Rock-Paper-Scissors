const choices = ['rock', 'paper', 'scissor']
const rounds = prompt('Enter how many rounds you want to play: ')
let computerScore = 0
let playerScore = 0

let getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

let updateScores = (result) => {
    if (result === "You win!") {
        playerScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
};

let displayScores = () => {
    console.log(`Player Score: ${playerScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

let game = (play) => {
    for (let round = 1; round <= play; round++) {
        console.log(`Round ${round}`);
        
        let playerSelection;
        while (true) {
            playerSelection = prompt('Choose rock, paper, or scissor: ').toLowerCase();
            console.log('Player choice: ', playerSelection);

            if (choices.includes(playerSelection)) {
                break;
            } else {
                console.log("Wrong input. Please choose rock, paper, or scissor.");
            }
        }

        let computerSelection = getComputerChoice();
        console.log('Computer choice: ', computerSelection);

        if (playerSelection === computerSelection) {
            console.log("It's a draw");
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissor') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissor' && computerSelection === 'paper')
        ) {
            updateScores("You win!");
            console.log("You win!");
        } else {
            updateScores("You lose!");
            console.log("You lose!");
        }

        displayScores();
        console.log('')
    }

    return playerScore > computerScore ? "You have won the game!" : "You have lost the game!"
}

let result = game(parseInt(rounds))
console.log(result)
