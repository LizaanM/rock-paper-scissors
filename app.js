"use strict";

function updateScore(result) {
  if (result === "win") {
    playerScore += 1;
  } else if (result === "loose") {
    computerScore += 1;
  }
}

function computerPlay() {
  //return random computer choice
  const options = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return options[randomChoice];
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

function processResult(result, playerSelection, computerSelection) {
  //process player win, loose, or draw
  if (result === "draw") {
    resultText.textContent = "It's a draw!";
  } else if (result === "win") {
    updateScore(result);
    resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    updateScore(result);
    resultText.textContent = `You loose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function showScore() {
  const player = document.querySelector(".player-score");
  const computer = document.querySelector(".computer-score");

  player.textContent = `Your score: ${playerScore}`;
  computer.textContent = `Computer score: ${computerScore}`;
}

function checkGameOver() {
  return playerScore >= 5 || computerScore >= 5;
}

function getWinner() {
  return playerScore > computerScore ? "You" : "the computer";
}

function loadReplay() {
  //create option to replay game
  const replay = document.createElement("span");
  replay.textContent = "Replay?";
  replay.style.color = "#50bbff";
  replay.style.cursor = "pointer";

  replay.addEventListener("click", () => {
    location.reload();
  });

  gameOverText.appendChild(replay);
}

function showGameOver() {
  gameOverText.textContent = `Game over...${getWinner()} won. `;
  loadReplay();
}

function playRound(event) {
  //play a single round

  const computerSelection = computerPlay();
  const playerSelection = event.target.textContent;

  playerText.textContent = `You chose: ${playerSelection}`;
  computerText.textContent = `The computer chose: ${computerSelection}`;

  const result = getRoundResult(playerSelection, computerSelection);
  processResult(result, playerSelection, computerSelection);
  showScore();
  if (checkGameOver()) {
    showGameOver();
    buttons.forEach((button) => button.removeEventListener("click", playRound));
  }
}

function play() {
  showScore();
  buttons.forEach((button) => button.addEventListener("click", playRound));
}

let playerScore = 0;
let computerScore = 0;

const playerText = document.querySelector(".player-text");
const computerText = document.querySelector(".computer-text");
const resultText = document.querySelector(".result-text");
const gameOverText = document.querySelector(".gameover-text");
const buttons = document.querySelectorAll("button");

play();
