function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Scissors") 
    || (playerSelection === "Paper" && computerSelection === "Rock")
    || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScore ++;
        roundWinner = "Player";
    } 
    else if ((playerSelection === "Rock" && computerSelection === "Paper") 
    || (playerSelection === "Paper" && computerSelection === "Scissors")
    || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        computerScore ++;
        roundWinner = "Computer";
    }
    else if (playerSelection === computerSelection) {
        roundWinner = "Tie";
    }
}

function isGameOver() {
    return (playerScore === 5 || computerScore === 5);

}

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerPoints = document.getElementById('p-points');
const computerPoints = document.getElementById('c-points');
const playerSymbol = document.getElementById('p-symbol');
const computerSymbol = document.getElementById('c-symbol');
const roundResult = document.getElementById('upper-text');
const xBeatsY = document.getElementById('lower-text');



rockBtn.addEventListener('click', () => handleClick('Rock'));
paperBtn.addEventListener('click', () => handleClick('Paper'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));



function handleClick(playerSelection) {
    const computerChoice = getComputerChoice();

    playRound(playerSelection, computerChoice);
    updateScore();
    roundStats(roundWinner, playerSelection, computerChoice);
    updateSymbol(playerSelection, computerChoice);


    if (isGameOver()) {
        playAgain();
        disableButtons();
        return;
    }
}

function updateScore() {
    if (roundWinner === 'Tie') {
        roundResult.textContent = "It's a tie!";
    } else if (roundWinner === 'Player') {
        roundResult.textContent = 'You won!';
    } else if (roundWinner === 'Computer') {
        roundResult.textContent = 'You lost!';
    }

    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
}

function roundStats(roundWinner, playerSelection, computerSelection) {
    if (roundWinner === 'Tie') {
        xBeatsY.textContent = `${playerSelection} ties with ${computerSelection}`;
    } else if (roundWinner === 'Player') {
        xBeatsY.textContent = `${playerSelection} beats ${computerSelection}`;
    } else if (roundWinner === 'Computer') {
        xBeatsY.textContent = `${playerSelection} is beaten by ${computerSelection}`;
    }
}

function updateSymbol(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            playerSymbol.textContent = '✊';
            break
        case 'Paper':
            playerSymbol.textContent = '✋';
            break
        case 'Scissors':
            playerSymbol.textContent = '✌';
            break;
    }

    switch (computerSelection) {
        case 'Rock':
            computerSymbol.textContent = '✊';
            break
        case 'Paper':
            computerSymbol.textContent = '✋';
            break
        case 'Scissors':
            computerSymbol.textContent = '✌';
            break
    }
}

function gameWinner() {
    if (playerScore == 5) {
        return 'Player';
    } else if (computerScore == 5) {
        return 'Computer';
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function playAgain() {
    if(isGameOver() && gameWinner() === 'Player') {
        roundResult.textContent = 'You won the game. Congratulations!';
        xBeatsY.textContent = 'Refresh the browser to play again';
    } else if (isGameOver() && gameWinner() === 'Computer') {
        roundResult.textContent = 'You got beaten by the computer. Pathetic!';
        xBeatsY.textContent = 'Refresh the browser to play again';
    }

    let playAgainButton = document.createElement('button');
    playAgainButton.className = 'play-again-button';
    playAgainButton.textContent = 'Play Again';

    playAgainButton.onclick = function() {
        location.reload();
    };

    xBeatsY.innerHTML = '';
    xBeatsY.appendChild(playAgainButton);
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}




/*function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your weapon of choice! Rock, Paper or Scissors.");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game()); */