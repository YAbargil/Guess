"use strict";

let sum0, sum1, turn;
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const currScore0 = document.querySelector("#current--0");
const currScore1 = document.querySelector("#current--1");

turn = sum0 = sum1 = 0;
const reset = function () {
  sum0 = sum1 = turn = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add("hidden");
  currScore0.textContent = 0;
  currScore1.textContent = 0;
  turn = 0;
};

const roll = function () {
  return Math.floor(Math.random() * 6 + 1);
};
//NEW BUTTON
document.querySelector(".btn--new").addEventListener("click", reset);

//ROLL BUTTON
document.querySelector(".btn--roll").addEventListener("click", function () {
  let currDice = roll();
  dice.src = `dice-${currDice}.png`;
  dice.classList.remove("hidden");

  if (!(turn % 2)) {
    if (currDice !== 1) {
      sum0 += currDice;
      currScore0.textContent = sum0; //PLAYER1
    } else {
      currScore0.textContent = score0.textContent = sum0 = 0;
      turn++;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  } else {
    //PLAYER 2
    if (currDice !== 1) {
      sum1 += currDice;
      currScore1.textContent = sum1; //PLAYER1
    } else {
      currScore1.textContent = score1.textContent = sum1 = 0;
      turn++;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  }
});

//HOLD BUTTON
document.querySelector(".btn--hold").addEventListener("click", function () {
  if (!(turn % 2)) {
    sum0 += Number(score0.textContent);
    score0.textContent = sum0;
    sum0 = 0;
    currScore0.textContent = sum0;
    if (score0.textContent > 15) {
      player0.classList.add(`player--winner`);
      player0.classList.remove("player--active");
    } else {
      turn++;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  } else {
    sum1 += Number(score1.textContent);
    score1.textContent = sum1;
    sum1 = 0;
    currScore1.textContent = sum1;
    if (score1.textContent > 15) {
      player1.classList.add(`player--winner`);
      player1.classList.remove("player--active");
    } else {
      turn++;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  }
});
