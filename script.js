let computerScore = 0;
let playerScore = 0;

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const ScissorsBtn = document.getElementById('scissorsBtn');
const playAgainBtn = document.getElementById('playAgainBtn');

const title = document.querySelector('#title');
const results = document.querySelector('#results');
const score = document.querySelector('#score');

rockBtn.addEventListener("click", () => playRound('rock'));
paperBtn.addEventListener("click", () => playRound('paper'));
scissorsBtn.addEventListener("click", () => playRound('scissors'));
playAgainBtn.addEventListener("click", () => playAgain());

function updateScore() {
    score.style.visibility = 'visible';
    results.style.visibility = 'visible';
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }

function computerPlay() {
    let computerPlay =  Math.random();
    if (computerPlay < 0.34) {
        return "rock";
    } else if (computerPlay <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            results.textContent = "Tie! Rock vs Rock!"
        } else if (computerSelection === "paper") {
            computerScore++;
            results.textContent = "You lose! Paper beat rock.";
        } else if (computerSelection === "scissors") {
            playerScore++;
            results.textContent = "You won! Rock beat scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            results.textContent = "You won! Paper beat rock.";
        } else if (computerSelection === "paper") {
            results.textContent = "Tie! Paper vs Paper.";
        } else if (computerSelection === "scissors") {
            computerScore++;
            results.textContent = "You lose! Scissors beat paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            results.textContent = "You lose! Rock beat scissors.";
        } else if (computerSelection === "paper") {
            playerScore++;
            results.textContent = "You won! Scissors beat paper.";
        } else if (computerSelection === "scissors") {
            results.textContent = "Tie! Scissors vs scissors.";
        }
    }

    updateScore();

    if (isGameOver()) {
        if (playerScore > computerScore) {
            results.textContent = "YOU WON!!";
            results.style.fontSize = '92px';
        } else {
            results.textContent = "YOU LOST.";
            results.style.fontSize = '92px';
        }
        title.style.display = 'none';
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        playAgainBtn.style.display = 'block';
        return
    }
}

function playAgain() {
    computerScore = 0;
    playerScore = 0;

    score.style.visibility = 'hidden';
    results.style.visibility = 'hidden';

    title.style.display = 'block';
    rockBtn.style.display = 'block';
    paperBtn.style.display = 'block';
    scissorsBtn.style.display = 'block';
    playAgainBtn.style.display = 'none';

    results.style.fontSize = '';
}