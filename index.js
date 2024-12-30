const options = ["rock", "paper", "scissors"];

// Function to get the player's choice
function getPlayerChoice() {
    let playerChoice = prompt("Please choose rock, paper, or scissors!");
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper")
    {return null}
    return playerChoice;
}

// Function to get the computer's random choice
function getComputerInput() {
    const computerInput = options[Math.floor(Math.random() * options.length)];
    return computerInput;
}

// Function to determine the winner of the round
function winner(playerChoice, computerInput) {
    // Check for a tie
    if (playerChoice === computerInput) {
        return "Tie";
    }
    // Check if the player wins
    else if (
        (playerChoice === "rock" && computerInput === "scissors") ||
        (playerChoice === "paper" && computerInput === "rock") ||
        (playerChoice === "scissors" && computerInput === "paper")
    ) {
        return "Player";
    }
    // Check if the computer wins
    else if (playerChoice === null)   
        {
        return "Try Again: Invalid input!";
    }
    // If the input is incorrect (not one of "rock", "paper", or "scissors")
    else
     {
        return "Computer";
    }
}

// Function to start a round and determine the winner
function startRound(playerChoice, computerInput) {
    const result = winner(playerChoice, computerInput);
    if (result == "Tie") {
        return "It was a tie!";
    }
    else if (result == "Player") {
        return `Player has won the round! ${playerChoice} beats ${computerInput}`;
    }
    else if  (result == "Computer")
    {
        return `The computer has won the round! ${computerInput} beats ${playerChoice}`;
    }
    else {
        
    }
}
 
// Main game function to play 5 rounds and store the results
function playGame() {
    let roundHistory = [];
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice(); 
        if (!playerSelection) {
            console.log("Invalid user input");
            break;
        }
        const computerSelection = getComputerInput();  // Computer input
        const result = startRound(playerSelection, computerSelection);  // Determine round result
        roundHistory.push(result);  // Store round result

        console.log(`Round ${i + 1}: ${result}`);  // Display round result
    }

    // After all rounds, display the history
    console.log("\nGame Over! Round history:");
    roundHistory.forEach((result, index) => {
        console.log(`Round ${index + 1}: ${result}`);
    });
}

// Calling the playGame function to start the game
playGame();