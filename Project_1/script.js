let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',
  ()=>{
    const guess = Number(document.querySelector('.guess').value);
  
    // When guess is empty
    if(!guess){
      document.querySelector('.message').textContent = "No Number";
   
    // When guess is equal
    }else if(secretNumber == guess){
      document.querySelector('.message').textContent = 'Correct Number'
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = "#60b347"
      if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    // When guess is different
    }else if(secretNumber !== guess){
      if(score > 1){
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 
        guess > secretNumber ? 'Too high' : 'Too low';
      }else{
        document.querySelector('.message').textContent = 'You Lost the game'
      }
    }
  });

  document.querySelector('.again').addEventListener('click', ()=>{
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
  })


