var timerEl = document.getElementById('countdown');
var testEl = document.getElementById('test')

// function clean() {testEl.parentNode.removeChild(testEl)}
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

 
var buttonOne_One = document.createElement('button');
  buttonOne_One.id = 'questOne_One';
  buttonOne_One.className = 'questions';
  buttonOne_One.innerHTML = 'Am I doing this right?';
  testEl.appendChild(buttonOne_One);
  

  var buttonTwo_One = document.createElement('button');
  buttonTwo_One.id = 'questTwo_One';
  buttonTwo_One.className = 'questions';
  buttonTwo_One.innerHTML = 'I do not think so';
  testEl.appendChild(buttonTwo_One);
  
  var buttonThree_One = document.createElement('button');
  buttonThree_One.id = 'questThree_One';
  buttonThree_One.className = 'questions';
  buttonThree_One.innerHTML = 'What is wrong?';
  testEl.appendChild(buttonThree_One);

  var buttonFour_One = document.createElement('button');
  buttonFour_One.id = 'questFour_One';
  buttonFour_One.className = 'questions';
  buttonFour_One.innerHTML = 'Everything';
  testEl.appendChild(buttonFour_One);

  var correctAnswer = function corAns() {alert ("you got this right!")}
  var wrongAnswer = function wrongAns() {alert ("you got this wrong!")}
  
  buttonOne_One.addEventListener("click", timer);
  buttonOne_One.addEventListener("click", correctAnswer);

  buttonTwo_One.addEventListener("click", timer);
  buttonTwo_One.addEventListener("click", wrongAnswer);
  
  buttonThree_One.addEventListener("click", timer);
  buttonThree_One.addEventListener("click", wrongAnswer);
  
  buttonFour_One.addEventListener("click", timer);
  buttonFour_One.addEventListener("click", wrongAnswer);

//   var questionTwo = 
//   function qTwo() {
//     var buttonOne_One = document.createElement('button');
//   buttonOne_Two.id = 'questOne_Two';
//   buttonOne_Two.className = 'questions'
//   buttonOne_Two.innerHTML = 'Did it change';
//   testEl.appendChild(buttonOne_One);
  

//   var buttonTwo_Two = document.createElement('button');
//   buttonTwo_Two.id = 'questTwo_Two';
//   buttonTwo_Two.className = 'questions'
//   buttonTwo_Two.innerHTML = 'I do not think so';
//   testEl.appendChild(buttonTwo_Two);
  
//   var buttonThree_Two = document.createElement('button');
//   buttonThree_Two.id = 'questThree_Two';
//   buttonThree_Two.className = 'questions'
//   buttonThree_Two.innerHTML = 'What is wrong?';
//   testEl.appendChild(buttonThree_Two);

//   var buttonFour_Two = document.createElement('button');
//   buttonFour_Two.id = 'questFour_Two';
//   buttonFour_Two.className = 'questions'
//   buttonFour_Two.innerHTML = 'I be dumb';
//   testEl.appendChild(buttonFour_Two);

//   var correctAnswer = function corAns() {alert ("you got this right!")}
//   var wrongAnswer = function wrongAns() {alert ("you got this wrong!")}
  
//   buttonOne_Two.addEventListener("click", timer);
//   buttonOne_Two.addEventListener("click", correctAnswer);

//   buttonTwo_Two.addEventListener("click", timer);
//   buttonTwo_Two.addEventListener("click", wrongAnswer);
  
//   buttonThree_Two.addEventListener("click", timer);
//   buttonThree_Two.addEventListener("click", wrongAnswer);
  
//   buttonFour_Two.addEventListener("click", timer);
//   buttonFour_Two.addEventListener("click", wrongAnswer);}

//   var questionThree = 
//   function qThree() {
//     var buttonOne_Three = document.createElement('button');
//   buttonOne_Three.id = 'questOne_Three';
//   buttonOne_Three.className = 'questions'
//   buttonOne_Three.innerHTML = 'Am I doing this right?';
//   testEl.appendChild(buttonOne_Three);
  

//   var buttonTwo_Three = document.createElement('button');
//   buttonTwo_Three.id = 'questTwo_Three';
//   buttonTwo_Three.className = 'questions'
//   buttonTwo_Three.innerHTML = 'I do not think so';
//   testEl.appendChild(buttonTwo_Three);
  
//   var buttonThree_Three = document.createElement('button');
//   buttonThree_Three.id = 'questThree_Three';
//   buttonThree_Three.className = 'questions'
//   buttonThree_Three.innerHTML = 'What is wrong?';
//   testEl.appendChild(buttonThree_Three);

//   var buttonFour_Three = document.createElement('button');
//   buttonFour_Three.id = 'questFour_Three';
//   buttonFour_Three.className = 'questions'
//   buttonFour_Three.innerHTML = 'Everything';
//   testEl.appendChild(buttonFour_Three);

//   var correctAnswer = function corAns() {alert ("you got this right!")}
//   var wrongAnswer = function wrongAns() {alert ("you got this wrong!")}
  
//   buttonOne_Three.addEventListener("click", timer);
//   buttonOne_Three.addEventListener("click", correctAnswer);

//   buttonTwo_Three.addEventListener("click", timer);
//   buttonTwo_Three.addEventListener("click", wrongAnswer);
  
//   buttonThree_Three.addEventListener("click", timer);
//   buttonThree_Three.addEventListener("click", wrongAnswer);
  
//   buttonFour_Three.addEventListener("click", timer);
//   buttonFour_Three.addEventListener("click", wrongAnswer);}