"use strict";
console.log("quiz game".toLocaleUpperCase());
import { data } from "./data.js";
console.log(data);

// Buttons
const btnNextQuestion = document.querySelector("#next-question");
const btnResetGame = document.querySelector("#reset-game");

// Score
const displayScore = document.querySelector("#score");

let i = 0;
btnNextQuestion.addEventListener("click", () => {
  i++;
  console.log(`domanda numero ${i}`);
});

btnResetGame.addEventListener("click", () => {
  i = 0;
  displayScore.textContent = "0000";
  console.log(`domanda numero ${i}`);
});
