// guess a random number
let randomNumber = parseInt(Math.random()*100 + 1);

// imports from html file
// const form = document.querySelector('form')
const submit = document.querySelector("#sbmt");
const userInput = document.querySelector("#userInput");
const win = document.querySelector("#win");
const previusGuesses = document.querySelector("#previusGuesses");
const attempts = document.querySelector("#attempts");
const results = document.querySelector("#results");
const para = document.createElement("p");
// Global Variables:
let userGuess = [];
let totalChance = 5;
let playGame = true;

// adding eventlistner and preventing defalut form action:

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!playGame) {
    return (win.innerHTML = "Game is over ! please start a new game.");
  }
  const guess = parseInt(userInput.value);
  validateGuess(guess);
  //   cleanUpGuess()
});

// take userInput and authenticate that in a seperate fucntion
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please provide a valid number.");
  } else if (guess > 100) {
    alert(`Number shouldn't be more than 100`);
  } else if (guess < 0) {
    alert("Number can't be negative.");
  } else if (guess === 0) {
    alert(`Number should be greater than zero`);
  } else {
    userGuess.push(guess);
    checkGuess(guess);
    cleanUpGuess();
    if (totalChance === 0) {
      endGame();
    }
  }
}

// checkGuess fucntion
// is it too low or too high
function checkGuess(guess) {
  if (randomNumber === guess) {
    displayMessage("you gussed it right.");
    endGame();
  } else if (randomNumber < guess) {
    displayMessage("too high");
  } else {
    displayMessage("too low");
  }
}

// display message
function displayMessage(message) {
  win.innerHTML = `<h2>${message}</h2>`;
}
//display guess
function cleanUpGuess() {
  userInput.value = "";
  totalChance -= 1;
  previusGuesses.innerHTML = userGuess;
  attempts.innerHTML = totalChance;
}

// endGame
function endGame() {
  playGame = false;
  userInput.setAttribute("disabled", "");
  para.innerHTML = "<h2>New Game</h2>";
  para.classList.add(
    "newBtn",
    "cursor-pointer",
    "bg-black",
    "text-white",
    "px-4",
    "py-2",
    "rounded-lg",
    "my-4"
  );
  results.appendChild(para);
  newGame();
}

// newGAme
function newGame() {
  const newGameButton = document.querySelector(".newBtn");
    newGameButton.addEventListener("click", () => {
    randomNumber = parseInt(Math.random()*100 + 1);
    userInput.removeAttribute("disabled");
    userGuess = [];
    previusGuesses.innerHTML = userGuess
    totalChance = 5;
    attempts.innerHTML = totalChance
    win.innerHTML = "";

    results.removeChild(para);
    playGame = true;
  });
}
