// import functions and grab DOM elements
import { getRandomThrow } from "./get-random-throw.js"
const button = document.getElementById('play')

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const playerChoice = document.querySelector('input:checked')
    console.log(playerChoice.value)
    const computersThrow = getRandomThrow()
    console.log(computersThrow)
})