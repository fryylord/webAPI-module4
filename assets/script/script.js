var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

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

  
  
  const arr = ['alpha', 'bravo', 'charlie', 'delta', 'echo'];
  const cont = document.getElementById('test');

  const ul = document.createElement('ul');
  ul.setAttribute ('style', 'padding: 0; margin: 0;');
  ul.setAttribute('id', 'theList');

  for (i = 0; i <= arr.length - 1; i++) {
      const li = document.createElement('li');
      
      li.innerHTML = arr[i];	                        
      li.setAttribute ('style', 'display: block;');	
      ul.appendChild(li);		
  }
  cont.appendChild(ul);		

  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }