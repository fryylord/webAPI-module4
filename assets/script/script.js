var timerEl = document.getElementById('countdown');

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

  
  
  let questOne ={
    title: 'Best Quiz Ever',
    alternatives: ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'six'],
    correctAnswer: 1
  }
  const cont = document.getElementById('test');

  const ul = document.createElement('ul');
  ul.setAttribute ('style', 'padding: 0; margin: 0;');
  ul.setAttribute('id', 'theList');

  for (i = 0; i <= questOne.alternatives.length - 1; i++) {
      const li = document.createElement('button');
      li.id = "button" + i;
      li.innerHTML = questOne.alternatives[i];	                        
      li.setAttribute ('style', 'display: block;');	
      ul.appendChild(li);		

    
  }
 
  cont.appendChild(ul);		

  for(var i = 0; i <= questOne.alternatives.length; i++){
    var button = document.getElementById('button' + i);
    
  button.addEventListener('click', function() {
    alert('Button ' + i- + ' was clicked!');
    });
    }