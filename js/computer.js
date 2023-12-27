import { choices } from './choices.js';

export const getComputerChoice = () => {
    const computerChoice = document.querySelector('#computer-choice')
    const randomIndex = Math.floor(Math.random() * choices.length);

    computerChoice.textContent = `Player choice: ${choices[randomIndex].charAt(0).toUpperCase() + choices[randomIndex].slice(1)}`
    return choices[randomIndex];
};