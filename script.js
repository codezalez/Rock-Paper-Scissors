const choices = ['rock', 'paper', 'scissor'];
let computerScore = 0;
let playerScore = 0;

let getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

let updateScores = (result) => {
    if (result === "You win!") {
        playerScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
};

let displayScores = () => {
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
};

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

const result = playerScore > computerScore ? "You have won the game!" : "You have lost the game!";
console.log(result);
