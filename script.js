'use strict';

// DOM Selecting and Manipulating

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('span').textContent = 21;
console.log((document.querySelector('span').textContent = 21));

document.querySelector('.guess').value = 20;
console.log((document.querySelector('.guess').value = 20));

document.querySelector('.message').textContent;
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Winner🏆';
console.log(document.querySelector('.message').textContent);

// DOM Click Events

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number input yet';
  }
});
*/
// Guess a number game;

let guessNumber = Math.trunc(Math.random() * 50 + 1);
// console.log(guessNumber);
let score = 50;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number input yet...';
  } else if (guess === guessNumber) {
    document.querySelector(
      '.message'
    ).textContent = `Correct guess! You won the game`;
    document.querySelector('.number').textContent = guessNumber;
    // document.querySelector('.highscore').textContent = score;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('span').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You've lost the game...`;
      document.querySelector('span').textContent = 0;
    }
  } else if (guess < guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('span').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `You've lost the game...`;
      document.querySelector('span').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 50;
  guessNumber = Math.trunc(Math.random() * 50 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 50;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
