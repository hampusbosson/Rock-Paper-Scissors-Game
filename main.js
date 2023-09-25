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
    let pSelection = toLowerCase(playerSelection);
    if (pSelection !== "Rock" && pSelection !== "Paper" && pSelection !== "Scissors") {
        console.log('Try again! Weapons to choose from: "Rock", "Paper", or "Scissors".');
    }
    else if ((pSelection === "Rock" && computerSelection === "Scissors") 
    || (pSelection === "Paper" && computerSelection === "Rock")
    || (pSelection === "Scissors" && computerSelection === "Paper")) {
        return `You Win! ${selection} beats ${computerSelection}`;
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

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your weapon of choice! Rock, Paper or Scissors.");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());