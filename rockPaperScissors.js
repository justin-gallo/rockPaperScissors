function computerPlay() {
    let selection = Math.floor(Math.random()*3) + 1;
    if (selection === 1) {
        return "rock";
    } else if (selection === 2) {
        return "paper";
    } else if (selection === 3) {
        return "scissors";
    }
}

console.log(computerPlay());