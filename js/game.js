//import { choices } from './choices.js';
import { getComputerChoice } from './computer.js';
import { updateScores, displayScores, computerScore, playerScore } from './scores.js';

export const runGame = () => {
    const buttons = document.querySelectorAll('button');
    const resultElement = document.getElementById('result')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
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
        })
    });
};
