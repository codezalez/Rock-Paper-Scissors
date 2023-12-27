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
    const playerScoreDisplay = document.querySelector('#player-score')
    playerScoreDisplay.textContent = playerScore

    const computerScoreDisplay = document.querySelector('#computer-score')
    computerScoreDisplay.textContent = computerScore
};