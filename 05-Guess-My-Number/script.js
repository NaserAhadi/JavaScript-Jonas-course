"use strict";
// console.log(document.querySelector(".message").textContent);
let createNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let myNumber = createNumber();

let message = document.querySelector(".message");
let score = document.querySelector(".score");
let guess = document.querySelector(".guess");
let number = document.querySelector(".number");
let body = document.querySelector("body");

let decreaseNumber = function () {
  score.textContent = (score.textContent - 1).toString();
};

let highScore = document.querySelector(".highscore");

let againButton = document
  .querySelector(".again")
  .addEventListener("click", function () {
    myNumber = createNumber();
    guess.value = "";
    score.textContent = "20";
    highScore.textContent = "0";
    number.textContent = "?";
    body.style.background = "#222";
  });

let checkButton = document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guessNumber = Number(guess.value);

    if (!guessNumber) {
      message.textContent = "🛑 No Number!";
    } else {
      if (guessNumber === myNumber) {
        message.textContent = "🎉 Correct Guess";
        highScore.textContent = score.textContent;
        number.textContent = myNumber;
        body.style.background = "#60b347";
      } else if (guessNumber > myNumber) {
        message.textContent = "↗️ Too High";
        decreaseNumber();
      } else {
        message.textContent = "↘️ Too Low";
        decreaseNumber();
      }
    }
  });
