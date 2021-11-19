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

function play(playerSelection, computerSelection) { // Plays a single game.
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

function game() {
    let playerWinCount = 0;
    let playerLoseCount = 0;
    let tieCount = 0;

    for (let i = 1; i <= 5; i++) { //Run the play function five times and record results.
        let result = play(playerChoice, computerPlay());
        console.log(result);
        
        if (result.includes("win")) {
            playerWinCount = ++playerWinCount;
        } else if (result.includes("lose")) {
            playerLoseCount = ++playerLoseCount;
        } else if (result.includes('tie')) {
            tieCount = ++tieCount;
        }
    }

    if (playerWinCount > playerLoseCount) {
        return `You win the match! Final score is: 
        Player: ${playerWinCount}
        Computer: ${playerLoseCount}
        Ties: ${tieCount}`
    } else if (playerWinCount < playerLoseCount) {
        return `You lose the match! Final score is: 
        Player: ${playerWinCount}
        Computer: ${playerLoseCount}
        Ties: ${tieCount}`
    } else if (playerWinCount === playerLoseCount) {
        return `The match is a tie! Final score is: 
        Player: ${playerWinCount}
        Computer: ${playerLoseCount}
        Ties: ${tieCount}`
    }

    // To-do: 
    // - Rework play() function to return a global variable.
    // - Increment the value of playerWinCount, playerLoseCount, tieCount after each game. 
    // - Compare counter variables, and return winner and loser of match with results. 
}

console.log(game());