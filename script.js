let computerScore = 0;
let playerScore = 0;

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie! Rock vs Rock!";
        } else if (computerSelection === "paper") {
            computerScore++;
            return "You lose! Paper beat rock.";
        } else if (computerSelection === "scissors") {
            playerScore++;
            return "You won! Rock beat scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You won! Paper beat rock.";
        } else if (computerSelection === "paper") {
            return "Tie! Paper vs Paper.";
        } else if (computerSelection === "scissors") {
            computerScore++;
            return "You lose! Scissors beat paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return "You lose! Rock beat scissors.";
        } else if (computerSelection === "paper") {
            playerScore++;
            return "You won! Scissors beat paper.";
        } else if (computerSelection === "scissors") {
            return "Tie! Scissors vs scissors.";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What do you want to play? (Rock, Paper, Scissors)")
        console.log(playRound(playerSelection, computerPlay()));
      }
    if (playerScore > computerScore) {
        console.log(`YOU WON WITH ${playerScore} - ${computerScore}`);
    } else {
        console.log(`YOU LOST WITH ${playerScore} - ${computerScore}`);
    }
}