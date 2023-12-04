"use strict";
let createSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = createSecretNumber();

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let guess = document.querySelector(".guess");
let number = document.querySelector(".number");
let body = document.querySelector("body");

let decreaseNumber = function () {
  score.textContent -= 1;
};

let highScoreElement = document.querySelector(".highscore");
let highScoreNumber = 0;

let againButton = document
  .querySelector(".again")
  .addEventListener("click", function () {
    secretNumber = createSecretNumber();
    guess.value = "";
    score.textContent = 20;
    number.textContent = "?";
    message.textContent = "Start guessing...";
    body.style.backgroundColor = "#222";
    guess.disabled = false;
  });

let checkButton = document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guessNumber = Number(guess.value);

    if (!guessNumber) {
      message.textContent = "🛑 No Number!";
    } else if (guessNumber < 1) {
      message.textContent = "input number between 1 to 20";
    } else {
      if (guessNumber === secretNumber) {
        message.textContent = "🎉 Correct Guess";
        number.textContent = secretNumber;
        body.style.backgroundColor = "#60b347";
        if (Number(score.textContent) > Number(highScoreNumber)) {
          highScoreNumber = Number(score.textContent);
          highScoreElement.textContent = highScoreNumber;
        }
        guess.disabled = true;
      } else if (guessNumber > secretNumber) {
        message.textContent = "↗️ Too High";
        decreaseNumber();
      } else {
        message.textContent = "↘️ Too Low";
        decreaseNumber();
      }
    }
  });
