export function getRandomThrow() {
    let randomNumber = Math.random()
    if (randomNumber <= .33) return "rock"
    if (randomNumber => .33 && randomNumber <= .66) return "paper"
    else return "scissor"

}
