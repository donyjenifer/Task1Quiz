function calculateScore() {
  var totalScore = 0;

  
  var q1Answer = document.querySelector('input[name="q1"]:checked').value;
  var q2Answer = document.querySelector('input[name="q2"]:checked').value;
  var q3Answer = document.querySelector('input[name="q3"]:checked').value;
  var q4Answer = document.querySelector('input[name="q4"]:checked').value;
  var q5Answer = document.querySelector('input[name="q5"]:checked').value;

  
  if (q1Answer === 'a') {
      totalScore++;
  }
  if (q2Answer === 'b') {
      totalScore++;
  }
  if (q3Answer === 'a') {
      totalScore++;
  }
  if (q4Answer === 'b') {
      totalScore++;
  }
  if (q5Answer === 'a') {
      totalScore++;
  }

  
  var resultElement = document.getElementById('result');
  resultElement.textContent = 'Total Score: ' + totalScore;
}
