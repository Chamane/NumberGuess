// game values
let min=1,
    max=10,
    winningNumber=6,
    guessesLeft=3;

// UI Elements
const game = document.querySelector('#game'),
      ninimum = document.querySelector(' .mini-nmum'),
      maximum = document.querySelector('.maxi-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// assign UI min and max
min.textContent = min;
max.textContent = max;

game.addEventListener('click', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
  e.preventDefault();
})

// listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // validate
  if(isNaN(guess) || guess<min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // check if won
  if(guess === winningNumber){
    gameOver(false, `${winningNumber} is correct! You Win!`);
  }else{
    // wrong Number
    guessesLeft -= 1;
    if(guessesLeft === 0){
      // game over - lost
      gameOver(true, `Game over, you lost. the correct number is ${winningNumber}`);
    }else{
      // game continue
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

    }
  }
});

// game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'red': color = 'green';

  guessInput.disabled = true;
  guessBtn.disabled = true;
  guessInput.style.borderColor = color;
  guessInput.value = '';
  setMessage(msg, color);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// setMessage
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
