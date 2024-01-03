import { getComputerChoice } from './computer.js';
import { updateScores, displayScores, playerScore, computerScore } from './scores.js';

export const runGame = () => {
    const buttons = document.querySelectorAll('button');
    const resultElement = document.getElementById('result')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (playerScore < 5 && computerScore < 5) {
                const playerSelection = button.id;
                const computerSelection = getComputerChoice()
    
                if (playerSelection === computerSelection) {
                    resultElement.textContent = "It's a draw";
                } else if (
                    (playerSelection === 'rock' && computerSelection === 'scissor') ||
                    (playerSelection === 'paper' && computerSelection === 'rock') ||
                    (playerSelection === 'scissors' && computerSelection === 'paper')
                ) {
                    updateScores("You win!");
                    resultElement.textContent = 'You win!'
                } else {
                    updateScores("You lose!");
                    resultElement.textContent = 'You lose!'
                }
            
                displayScores();
            }
            if (playerScore === 5 || computerScore === 5) {
                endGame();
            }
        })
    });
};

export const endGame = () => {
    const resultElement = document.getElementById('result');
    resultElement.textContent = playerScore > computerScore ? "You have won the game!" : "You have lost the game!";
};
