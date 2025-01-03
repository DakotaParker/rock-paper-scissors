const options = ["rock", "paper", "scissors"];

// Track scores
let playerScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return `Player wins! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${playerChoice}`;
    }
}

// Function to update the score display
function updateScores() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", function() {
    const playerChoice = "rock";
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
    updateScores();
});

document.getElementById("paper").addEventListener("click", function() {
    const playerChoice = "paper";
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
    updateScores();
});

document.getElementById("scissors").addEventListener("click", function() {
    const playerChoice = "scissors";
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    alert(result);
    updateScores();
});
