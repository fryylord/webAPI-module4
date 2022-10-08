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

  
  
  // let questionOne ={
  //   title: 'Best Quiz Ever',
  //   alternatives: ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'six'],
  // }
  const cont = document.getElementById('test');

  const ul = document.createElement('ul');
  ul.setAttribute ('style', 'padding: 0; margin: 0;');
  ul.setAttribute('id', 'questOne');
  
  var theList = ['Right', 'Wrong', 'Maybe Right', 'Maybe Wrong'];
  var output = document.getElementById('test');
  var getButtonList = function(items){
      var html = '<ul>';
      for(var item in items){
          html += '<li><button>' + items[item] + '</button></li>';
      }
      html += '</ul>';
      return html;
      	
  };
  output.innerHTML = getButtonList( theList );

  // for (i = 0; i<= theList.length -1; i++) {
  //   var x = document.querySelector('questOne');
  //   x.addEventListener("click", alert('Button ' + i + ' was clicked!'))}

  // for (i = 0; i <= questionOne.alternatives.length - 1; i++) {  
  //   const li = document.createElement('button');
  //     li.innerHTML = questionOne.alternatives[i];	                        
  //     li.setAttribute ('style', 'display: block;');	
  //     ul.appendChild(li);		
  //     li.addEventListener('click', function() {
        // alert('Button ' + i + ' was clicked!')})
  //     cont.appendChild(ul);		
  //   }

  // for(var i = 0; i <= questOne.alternatives.length; i++){
  //   var button = document.getElementById('button' + i);
    

  //   });
  //   }