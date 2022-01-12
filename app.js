function toTitleCase(str) {
  //convert string to Titlecase
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function getPlayerResult(playerSelection, computerSelection) {
  //compare player's choice to computers' choice
  //return player win , loose, or draw
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
  //return computer choice
  const randomChoice = Math.floor(Math.random() * 3);
  return options[randomChoice];
}

function updateScore(result) {
  //update score depending on who won
  if (result === "win") {
    playerScore += 1;
  } else if (result === "loose") {
    computerScore += 1;
  }
}

function playRound(playerSelection, computerSelection) {
  //play a single round
  playerResult = getPlayerResult(playerSelection, computerSelection);

  if (playerResult === "draw") {
    return "It's a draw!";
  } else if (playerResult === "win") {
    updateScore(playerResult);
    return "You win!";
  } else {
    updateScore(playerResult);
    return `You loose! ${computerSelection} beats ${toTitleCase(
      playerSelection
    )}.`;
  }
}

function showScore() {
  console.log(`Score: Player = ${playerScore}, Computer = ${computerScore}`);
}

function getGameMessage() {
  //return player result after all rounds completed
  if (playerScore > computerScore) {
    return "You won!";
  } else if (playerScore < computerScore) {
    return "You lost!";
  }
  return "It was a draw!";
}

function game(rounds) {
  // run game for set amount of rounds
  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt("Enter your selection: ");

    computerSelection = computerPlay();
    console.log(`Round: ${i + 1}`);
    console.log(`You chose: ${toTitleCase(playerSelection)}`);
    console.log(`The computer chose: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    showScore();
    console.log("\n");
  }
  console.log("Game Over.");
  console.log(getGameMessage());
}

const options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

game(5);
