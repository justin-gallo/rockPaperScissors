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

function playRound(playerSelection, computerSelection) { // Plays a single game.

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = `It's a tie! You chose: ${playerSelection}. The computer chose: ${computerSelection}.`;
            resultContainer.appendChild(result);
        } else if (computerSelection === "paper") {
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = `You lose! You chose: ${playerSelection}. The computer chose: ${computerSelection}.`;
            resultContainer.appendChild(result);
        } else if (computerSelection === "scissors") {
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = `You win! You chose: ${playerSelection}. The computer chose: ${computerSelection}.`;
            resultContainer.appendChild(result);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = `You win! You chose: ${playerSelection}. The computer chose: ${computerSelection}.`;
            resultContainer.appendChild(result);
        } else if (computerSelection === "paper") {
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = `It's a tie! You chose: ${playerSelection}. The computer chose: ${computerSelection}.`;
            resultContainer.appendChild(result);
        } else if (computerSelection === "scissors") {
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = `You lose! You chose: ${playerSelection}. The computer chose: ${computerSelection}.`;
            resultContainer.appendChild(result);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = `You lose! You chose: ${playerSelection}. The computer chose: ${computerSelection}.`;
            resultContainer.appendChild(result);
        } else if (computerSelection === "paper") {
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = `You win! You chose: ${playerSelection}. The computer chose: ${computerSelection}.`;
            resultContainer.appendChild(result);
        } else if (computerSelection === "scissors") {
            const result = document.createElement('div');
            result.classList.add('result');
            result.textContent = `It's a tie! You chose: ${playerSelection}. The computer chose: ${computerSelection}.`;
            resultContainer.appendChild(result);
        }
    }
}

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    console.log(playRound('rock', computerPlay()));
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    console.log(playRound('paper', computerPlay()));
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    console.log(playRound('scissors', computerPlay()));
});

const resultContainer = document.querySelector('.resultContainer');

// function game() {
//     let playerWinCount = 0;
//     let playerLoseCount = 0;
//     let tieCount = 0;

//     for (let i = 1; i <= 5; i++) { //Run the play function five times and record results.
//         let result = playRound(computerPlay());
//         console.log(result);
        
//         if (result.includes("win")) {
//             playerWinCount = ++playerWinCount;
//         } else if (result.includes("lose")) {
//             playerLoseCount = ++playerLoseCount;
//         } else if (result.includes('tie')) {
//             tieCount = ++tieCount;
//         }
//     }

//     if (playerWinCount > playerLoseCount) {
//         return `You win the match! Final score is: 
//         Player: ${playerWinCount}
//         Computer: ${playerLoseCount}
//         Ties: ${tieCount}`
//     } else if (playerWinCount < playerLoseCount) {
//         return `You lose the match! Final score is: 
//         Player: ${playerWinCount}
//         Computer: ${playerLoseCount}
//         Ties: ${tieCount}`
//     } else if (playerWinCount === playerLoseCount) {
//         return `The match is a tie! Final score is: 
//         Player: ${playerWinCount}
//         Computer: ${playerLoseCount}
//         Ties: ${tieCount}`
//     }
// }

// console.log(game());