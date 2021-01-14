export function didUserWin(player, computer) {
    if (player === computer) return "draw"
    if (player === "rock" && computer === "paper") return "lose"
    if (player === "rock" && computer === "scissor") return "win"
    if (player === "paper" && computer === "scissor") return "lose"
    if (player === "paper" && computer === "rock") return "win"
    if (player === "scissor" && computer === "paper") return "win"
    if (player === "scissor" && computer === "rock") return "lose"
}