'use strict';
const number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('No number! 🚫');
  } else if (guess === number) {
    displayMessage('Correct number 🎉!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } }else if (guess != number){
      if (score > 1) {
        displayMessage(guess > number ? 'Too high!📈' : 'Too low 📉') ;
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game 🤯');
        document.querySelector('.score').textContent = 0;
      }
    }
  
});

document.querySelector('.again').addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 20 + 1);
  let score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
});
