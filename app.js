function titleCaseString(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getRoundResult(playerSelection, computerSelection) {
  //get player result for current round
  //return win, loose, or draw
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  const result = {
    rock: {
      rock: "draw",
      paper: "loose",
      scissors: "win",
    },
    paper: {
      rock: "win",
      paper: "draw",
      scissors: "loose",
    },
    scissors: {
      rock: "loose",
      paper: "win",
      scissors: "draw",
    },
  };
  return result[playerSelection][computerSelection];
}

function computerPlay() {
  //return random computer choice
  const options = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return options[randomChoice];
}

function updateScore(result) {
  if (result === "win") {
    playerScore += 1;
  } else if (result === "loose") {
    computerScore += 1;
  }
}

function playRound(playerSelection, computerSelection) {
  //play a single round
  result = getRoundResult(playerSelection, computerSelection);

  if (result === "draw") {
    return "It'str a draw!";
  } else if (result === "win") {
    updateScore(result);
    return "You win!";
  } else {
    updateScore(result);
    return `You loose! ${computerSelection} beats ${titleCaseString(
      playerSelection
    )}.`;
  }
}

function showScore() {
  console.log(`Score: You = ${playerScore}, Computer = ${computerScore}`);
}

function getOverallResult() {
  //return the overall result after all rounds completed
  if (playerScore > computerScore) {
    return "You won!";
  } else if (playerScore < computerScore) {
    return "You lost!";
  }
  return "It was a draw!";
}

function game(numRounds) {
  // play game for set amount of rounds
  for (let i = 0; i < numRounds; i++) {
    const playerSelection = prompt("Enter your selection: ");

    computerSelection = computerPlay();
    console.log(`Round: ${i + 1}`);
    console.log(`You chose: ${titleCaseString(playerSelection)}`);
    console.log(`The computer chose: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    showScore();
    console.log("\n");
  }
  console.log("Game Over.");
  console.log(getOverallResult());
}

let playerScore = 0;
let computerScore = 0;

game(5);
