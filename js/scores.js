export let computerScore = 0;
export let playerScore = 0;

export const updateScores = (result) => {
    if (result === "You win!") {
        playerScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
};

export const displayScores = () => {
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
};