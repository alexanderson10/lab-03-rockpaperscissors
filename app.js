// import functions and grab DOM elements
import { getRandomThrow } from "./get-random-throw.js"
import { didUserWin } from "./utils.js"
const button = document.getElementById('play')
const resultsSpan = document.getElementById('result')

// initialize state
let wins = 0
let loses = 0
// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const playerChoice = document.querySelector('input:checked')
    console.log(playerChoice.value)
    const computersThrow = getRandomThrow()
    console.log(computersThrow)
    const results = didUserWin(playerChoice.value, computersThrow)
    if (results === "win") {
        wins++
        resultsSpan.textContent = 'You win'
    }
    if (results === "lose") {
        loses++
        resultsSpan.textContent = 'You lose'
    }
    if (results === "draw") {
        resultsSpan.textContent = 'Draw'
    }
})