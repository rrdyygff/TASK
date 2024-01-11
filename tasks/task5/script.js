document.addEventListener('DOMContentLoaded', function () {
  var sourceText = document.getElementById('source-text');
  var resultText = document.getElementById('result-text');

  
  var letterImageMap = {
    'A': 'C:\Users\Admin\Desktop\tasks\task5\images\A.png',
    'B': 'C:\Users\Admin\Desktop\tasks\task5\images\B.png',
    'C': 'C:\Users\Admin\Desktop\tasks\task5\images\C.png',
    'D': 'C:\Users\Admin\Desktop\tasks\task5\images\D.png',
    'E': 'C:\Users\Admin\Desktop\tasks\task5\images\E.png',
    'F': 'C:\Users\Admin\Desktop\tasks\task5\images\F.png',
    'G': 'C:\Users\Admin\Desktop\tasks\task5\images\G.png',
    'H': 'C:\Users\Admin\Desktop\tasks\task5\images\H.png',
    'I': 'C:\Users\Admin\Desktop\tasks\task5\images\I.png',
    'J': 'C:\Users\Admin\Desktop\tasks\task5\images\G.png',
    'K': 'C:\Users\Admin\Desktop\tasks\task5\images\K.png',
    'L': 'C:\Users\Admin\Desktop\tasks\task5\images\L.png',
    'M': 'C:\Users\Admin\Desktop\tasks\task5\images\M.png',
    'N': 'C:\Users\Admin\Desktop\tasks\task5\images\N.png',
    'O': 'C:\Users\Admin\Desktop\tasks\task5\images\O.png',
    'P': 'C:\Users\Admin\Desktop\tasks\task5\images\P.png',
    'Q': 'C:\Users\Admin\Desktop\tasks\task5\images\Q.png',
    'R': 'C:\Users\Admin\Desktop\tasks\task5\images\R.png',
    'S': 'C:\Users\Admin\Desktop\tasks\task5\images\S.png',
    'T': 'C:\Users\Admin\Desktop\tasks\task5\images\T.png',
    'U': 'C:\Users\Admin\Desktop\tasks\task5\images\U.png',
    'V': 'C:\Users\Admin\Desktop\tasks\task5\images\V.png',
    'W': 'C:\Users\Admin\Desktop\tasks\task5\images\W.png',
    'X': 'C:\Users\Admin\Desktop\tasks\task5\images\X.png',
    'Z': 'C:\Users\Admin\Desktop\tasks\task5\images\Z.png',
    
  };

  document.getElementById('go').addEventListener('click', function () {
    var inputText = sourceText.value.toUpperCase(); 

    resultText.innerHTML = '';

    for (var i = 0; i < inputText.length; i++) {
      var letterSpan = document.createElement('span');
      letterSpan.textContent = inputText[i];
      letterSpan.style.setProperty('--anim-delay', i * 0.1 + 's');
      resultText.appendChild(letterSpan);


      if (letterImageMap[inputText[i]]) {
        var letterImage = document.createElement('img');
        letterImage.src = letterImageMap[inputText[i]];
        letterImage.alt = inputText[i];
        letterImage.style.setProperty('--anim-delay', i * 0.1 + 's');
        resultText.appendChild(letterImage);
      }
    }
  });
});
