'use strict';



let myScore = 100,
  highScore = 0;
let secretNumber = Math.floor(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (myScore > 10) {
    if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('WINNER! 🔥🔥');
      // document.querySelector('.message').textContent = 'WINNER! 🔥🔥';
      document.querySelector('body').style.backgroundColor = '#7CFC00';
      if (myScore > highScore) {
        document.querySelector('.highscore').textContent = myScore;
      }
    } else if (guess < 21 && guess) {
      myScore -= 10;
      document.querySelector('.score').textContent = myScore;
      if (guess > secretNumber) displayMessage('TOO HIGH! 🤔');
      // document.querySelector('.message').textContent = 'TOO HIGH! 🤔';
      else displayMessage('TOO LOW!😑');
      //document.querySelector('.message').textContent = 'TOO LOW!😑';
    } else {
      displayMessage('CHOOSE NUMBER BETWEEN 1~20!😒');
      // document.querySelector('.message').textContent ='CHOOSE NUMBER BETWEEN 1~20!😒';
    }
  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('YOU LOST! 👎👎👎');
    //document.querySelector('.message').textContent = 'YOU LOST! 👎👎👎';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  myScore = 100;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = myScore;
  document.querySelector('.guess').value = '';
  displayMessage('Start Guessing!');
  // document.querySelector('.message').textContent = 'Start Guessing!';
  document.querySelector('body').style.backgroundColor = '#222';
});
