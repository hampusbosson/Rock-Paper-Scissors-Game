function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}

function toLowerCase(word) {
    let selectionLowerCase = word.toLowerCase();
    let firstCharUpper = selectionLowerCase.charAt(0).toUpperCase();
    let remainder = selectionLowerCase.slice(1);
    let finishedWord = firstCharUpper + remainder;
    return finishedWord;
}

function playRound(playerSelection, computerSelection) {
    if ((pSelection === "Rock" && computerSelection === "Scissors") 
    || (pSelection === "Paper" && computerSelection === "Rock")
    || (pSelection === "Scissors" && computerSelection === "Paper")) {
        return `You Win! ${pSelection} beats ${computerSelection}`;
    } 
    else if ((pSelection === "Rock" && computerSelection === "Paper") 
    || (pSelection === "Paper" && computerSelection === "Scissors")
    || (pSelection === "Scissors" && computerSelection === "Rock")) {
        return `You Lose! ${computerSelection} beats ${pSelection}`;
    }
    else if (pSelection === computerSelection) {
        return "It's a tie!"
    }
}

function getPlayerSelection(callback) {
    const rock = document.querySelector('#rockBtn');
    const paper = document.querySelector('#paperBtn');
    const scissors = document.querySelector('#scissorsBtn');

    rock.addEventListener('click', () => callback('Rock'));
    paper.addEventListener('click', () => callback('Paper'));
    scissors.addEventListener('click', () => callback('Scissors'));
}

/*function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your weapon of choice! Rock, Paper or Scissors.");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game()); */