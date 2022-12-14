var timerEl = document.getElementById('countdown');

const runQuiz = function() {
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
      console.log(timerEl.textContent)
    }
  }, 1000);
}
countdown();

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const highScores = document.getElementById('highScores')
const submitButton = document.getElementById('submit');
const questions = [
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
  {
    question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
    answers: {
      a: "boolean",
      b: "undefined",
      c: "object",
      d: "integer"
    },
    correctAnswer: "c"
  },
];

(function(){
    function generateQuiz(){
      const output = [];
  
      questions.forEach(
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
  
      questions.forEach( (currentQuestion, questionNumber) => {
  
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
  
      resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
      return questions.length - numCorrect
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
    const scoreContainer = document.getElementById('score')
    
    let currentSlide = 0;
    showSlide(currentSlide);

    function generateScore() {
      const str = timerEl.textContent;
      const replaced = str.replace(/\D/g, ''); 

      let num;
      if (replaced !== '') {
        num = Number(replaced);
      }
      console.log(num);
      
      if (num - (showResults() * 20) > 0) {
        scoreContainer.innerHTML = `You score is ${num - (showResults() * 20)}!`;
        return num - (showResults()*20)
      }
      else{
        scoreContainer.innerHTML = `Your score is 0!`;
        return 0
      }

    }
    var scoreEl = document.getElementById('score');
    
    function getScore() {     
      const strTwo = scoreEl.textContent;
      const replacedTwo = strTwo.replace(/\D/g, ''); 

      let numTwo;
      if (replacedTwo !== '') {
        numTwo = Number(replacedTwo);
      }
      console.log(numTwo);
      return numTwo
    }

    const initialsEl = document.getElementById('initials')
    function initialsBox() {
      var getInitials = document.createElement('input');
      getInitials.setAttribute("type","text");
      var buttInitials = document.createElement('button');
      buttInitials.setAttribute("id", "buttIni");
      buttInitials.textContent = 'Enter Initials to Save High Score'
      initialsEl.append(getInitials);
      initialsEl.append(buttInitials);
    }

    const runHighScores = function() {
   
    var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

function renderTodos() {
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Remove";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function init() {
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  if (storedTodos !== null) {
    todos = storedTodos;
  }

  renderTodos();
}

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}


todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  if (todoText === "") {
    return;
  }

  todos.push(todoText);
  todoInput.value = "";

  storeTodos();
  renderTodos();
});

todoList.addEventListener("click", function(event) {
  var element = event.target;


  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    storeTodos();
    renderTodos();
  }
});

init()}

function showHighScores() {
  let card = document.getElementById("card");
  card.style.setProperty("visibility", "visible");
}

    highScores.addEventListener('click', showHighScores)
    submitButton.addEventListener('click', showResults);
    submitButton.addEventListener('click', generateScore);
    submitButton.addEventListener('click', getScore);
    submitButton.addEventListener('click', initialsBox);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    submitButton.addEventListener("click", runHighScores);
    submitButton.addEventListener("click", showHighScores);
  })();}
  const startButton = document.getElementById("startQuiz");
  startButton.addEventListener("click",runQuiz)

  function showHighScores() {
    let card = document.getElementById("card");
    card.style.setProperty("visibility", "visible");
  }

  highScores.addEventListener('click', showHighScores)
