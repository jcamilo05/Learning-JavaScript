'use strict'

// Selecting elements
const player_1 = document.querySelector('.player--0');
const player_2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const currentElement1 = document.getElementById('current--0')
const currentElement2 = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
let  currentScore, activePlayer, playing, scores;

// Starting conditions



let init = ()=>{
  scores = [0,0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score1.textContent = 0;
  score2.textContent = 0;
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;
  player_1.classList.remove('player--winner');
  player_2.classList.remove('player--winner');
  diceEl.classList.remove('hidden');
}

init();

// switching player

const switchPlayer = () =>{
    activePlayer = activePlayer === 0 ? 1:0;
    player_1.classList.toggle('player--active');
    player_2.classList.toggle('player--active');
    currentScore = 0;
}

// Rolling dice functionality

btn_roll.addEventListener('click', ()=>{
  if(playing){
    const dice = Math.trunc( Math.random()*6) +1;
    diceEl.src = `./img/dice-${dice}.png`;

    if(dice !== 1){
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }else{
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      switchPlayer();
    }
  }
});

btn_hold.addEventListener('click',()=>{
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

  if(scores[activePlayer] >= 20){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    playing = false;
    diceEl.classList.add('hidden');
  }

  switchPlayer();
});

btn_new.addEventListener('click', ()=>{
  init();
})
