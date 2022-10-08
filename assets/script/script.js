var timerEl = document.getElementById('countdown');
var testEl = document.getElementById('test')

var timer =
function countdown() {
    var timeLeft = 99;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }
  
  var buttonOne = document.createElement('button');
  buttonOne.id = 'questOne';
  buttonOne.className = 'questions'
  buttonOne.innerHTML = 'Am I doing this right?';
  testEl.appendChild(buttonOne);
  

  var buttonTwo = document.createElement('button');
  buttonTwo.id = 'questTwo';
  buttonTwo.className = 'questions'
  buttonTwo.innerHTML = 'I do not think so';
  testEl.appendChild(buttonTwo);
  
  var buttonThree = document.createElement('button');
  buttonThree.id = 'questThree';
  buttonThree.className = 'questions'
  buttonThree.innerHTML = 'What is wrong?';
  testEl.appendChild(buttonThree);

  var buttonFour = document.createElement('button');
  buttonFour.id = 'questFour';
  buttonFour.className = 'questions'
  buttonFour.innerHTML = 'Everything';
  testEl.appendChild(buttonFour);

  var correctAnswer = function corAns() {alert ("you got this right!")}
  var wrongAnswer = function wrongAns() {alert ("you got this wrong!")}
  
  buttonOne.addEventListener("click", timer);
  buttonOne.addEventListener("click", correctAnswer);

  buttonTwo.addEventListener("click", timer);
  buttonTwo.addEventListener("click", wrongAnswer);
  
  buttonThree.addEventListener("click", timer);
  buttonThree.addEventListener("click", wrongAnswer);
  
  buttonFour.addEventListener("click", timer);
  buttonFour.addEventListener("click", wrongAnswer);