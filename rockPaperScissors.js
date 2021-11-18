let playerChoice = "sCissors";

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

function play(playerSelection, computerSelection) {
    let playerSelectInsens = playerSelection.toLowerCase();

    if (playerSelectInsens === "rock") {
        if (computerSelection === "rock") {
            return `It's a tie! You chose: ${playerSelectInsens}. The computer chose: ${computerSelection}.`;
        } else if (computerSelection === "paper") {
            return `You lose! You chose: ${playerSelectInsens}. The computer chose: ${computerSelection}.`;
        } else if (computerSelection === "scissors") {
            return `You win! You chose: ${playerSelectInsens}. The computer chose: ${computerSelection}.`;
        }
    } else if (playerSelectInsens === "paper") {
        if (computerSelection === "rock") {
            return `You win! You chose: ${playerSelectInsens}. The computer chose: ${computerSelection}.`;
        } else if (computerSelection === "paper") {
            return `It's a tie! You chose: ${playerSelectInsens}. The computer chose: ${computerSelection}.`;
        } else if (computerSelection === "scissors") {
            return `You lose! You chose: ${playerSelectInsens}. The computer chose: ${computerSelection}.`;
        }
    } else if (playerSelectInsens === "scissors") {
        if (computerSelection === "rock") {
            return `You lose! You chose: ${playerSelectInsens}. The computer chose: ${computerSelection}.`;
        } else if (computerSelection === "paper") {
            return `You win! You chose: ${playerSelectInsens}. The computer chose: ${computerSelection}.`;
        } else if (computerSelection === "scissors") {
            return `It's a tie! You chose: ${playerSelectInsens}. The computer chose: ${computerSelection}.`;
        }
    }
}

console.log(play(playerChoice, computerPlay()));