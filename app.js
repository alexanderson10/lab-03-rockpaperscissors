// import functions and grab DOM elements
const button = document.getElementById('play')

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const playerChoice = document.querySelector('input:checked')
    console.log(playerChoice.value)
})