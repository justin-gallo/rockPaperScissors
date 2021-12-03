let winCount = 0;
let loseCount = 0;
let tieCount = 0;

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
    if (winCount >= 5 || loseCount >= 5) {
        return;
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                tieResult();
            } else if (computerSelection === "paper") {
                loseCountAppend();
            } else if (computerSelection === "scissors") {
                winCountAppend();
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                winCountAppend();
            } else if (computerSelection === "paper") {
                tieResult();
            } else if (computerSelection === "scissors") {
                loseCountAppend();
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                loseCountAppend();
            } else if (computerSelection === "paper") {
                winCountAppend();
            } else if (computerSelection === "scissors") {
                tieResult();
            }
        }
    } 
}

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});

function winCountAppend() {
    const targetWin = document.querySelector('.winCount');
    const targetLose = document.querySelector('.loseCount');
    let feedback = document.querySelector('.feedback');
    winCount++;
    targetWin.textContent = `${winCount}`;
    feedback.textContent = `You won this one! You've got ${winCount} wins out of 5. Keep going!`;
    targetWin.classList.add('glowCount');
    setTimeout(function(){
        targetWin.classList.remove('glowCount');
    }, 500);

    if (winCount === 5) {
        let feedback = document.querySelector('.feedback');
        feedback.textContent = `You win! Click the reset button to play again.`;
        const container = document.querySelector('#main');
        const reset = document.createElement('button');
        reset.classList.add('reset');
        reset.classList.add('resetHover');
        reset.textContent = `RESET GAME`;
        container.appendChild(reset);
        const resetBtn = document.querySelector('.reset');
        resetBtn.addEventListener('click', () => {
            winCount = 0;
            targetWin.textContent = `${winCount}`;
            loseCount = 0;
            targetLose.textContent = `${loseCount}`;
            container.removeChild(reset);
        });
    }

    if (loseCount === 5) {
        let feedback = document.querySelector('.feedback');
        feedback.textContent = `You lost! Click the reset button to play again.`;
        const container = document.querySelector('#main');
        const reset = document.createElement('button');
        reset.classList.add('reset');
        reset.classList.add('resetHover');
        reset.textContent = `RESET GAME`;
        container.appendChild(reset);
        const resetBtn = document.querySelector('.reset');
        resetBtn.addEventListener('click', () => {
            winCount = 0;
            targetWin.textContent = `${winCount}`;
            loseCount = 0;
            targetLose.textContent = `${loseCount}`;
            container.removeChild(reset);
        });
    }
}

function loseCountAppend() {
    const targetWin = document.querySelector('.winCount');
    const targetLose = document.querySelector('.loseCount');
    let feedback = document.querySelector('.feedback');
    loseCount++;
    targetLose.textContent = `${loseCount}`;
    feedback.textContent = `You lost that one. The CPU has ${loseCount} wins out of 5. Don't give up!`;
    targetLose.classList.add('glowCount');
    setTimeout(function(){
        targetLose.classList.remove('glowCount');
    }, 500);

    if (winCount === 5) {
        let feedback = document.querySelector('.feedback');
        feedback.textContent = `You win! Click the reset button to play again.`;
        const container = document.querySelector('#main');
        const reset = document.createElement('button');
        reset.classList.add('reset');
        reset.classList.add('resetHover');
        reset.textContent = `RESET GAME`;
        container.appendChild(reset);
        const resetBtn = document.querySelector('.reset');
        resetBtn.addEventListener('click', () => {
            winCount = 0;
            targetWin.textContent = `${winCount}`;
            loseCount = 0;
            targetLose.textContent = `${loseCount}`;
            container.removeChild(reset);
        });
    }

    if (loseCount === 5) {
        let feedback = document.querySelector('.feedback');
        feedback.textContent = `You lost! Click the reset button to play again.`;
        const container = document.querySelector('#main');
        const reset = document.createElement('button');
        reset.classList.add('reset');
        reset.classList.add('resetHover');
        reset.textContent = `RESET GAME`;
        container.appendChild(reset);
        const resetBtn = document.querySelector('.reset');
        resetBtn.addEventListener('click', () => {
            winCount = 0;
            targetWin.textContent = `${winCount}`;
            loseCount = 0;
            targetLose.textContent = `${loseCount}`;
            container.removeChild(reset);
        });
    }
}

function tieResult() {
    let feedback = document.querySelector('.feedback');
    feedback.textContent = `It's a tie! Try again.`; 
}