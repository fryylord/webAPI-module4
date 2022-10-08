// let startButton = document.createElement("button");
// startButton.innerHTML = "Take Test";
// startButton.onclick = function () {
//  generateQuiz; countdown;
// };
// document.body.appendChild(startButton);
// startButton.addEventListener("click", generateQuiz)
// startButton.addEventListener("click", countdown)

// function countdown() {
//   var timeLeft = 99;
//   var timeInterval = setInterval(function () {
//     if (timeLeft > 1) {
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       timerEl.textContent = '';
//       clearInterval(timeInterval);
//       displayMessage();
//     }
//   }, 1000);
// }

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "Javascript is an _______ language?",
    answers: {
      a: "Object-Oriented",
      b: "Object-Based",
      c: "Procedural",
      d: "None of the Above"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answers: {
      a: "var",
      b: "let",
      c: "Both A and B",
      d: "none of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answers: {
      a: "getElementbyID()",
      b: "getElementsbyClassName()",
      c: "Both A and B",
      d: "none of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: {
      a: "const",
      b: "var",
      c: "let",
      d: "constant"
    },
    correctAnswer: "a"
  },
];

(function(){
    function generateQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
        const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  generateQuiz()
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();