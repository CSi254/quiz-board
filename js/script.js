// first step
	function submitQuiz() {
		console.log('submitted');
// calculate each score for each answer given
  function answerScore (qName) {
    var radiosNo = document.getElementsByName(qName);

      for (var i = 0, length = radiosNo.length; i < length; i++) {
         if (radiosNo[i].checked) {
// do something with radiosNo
    	var answerValue = Number(radiosNo[i].value);
  	}
}
// change NaNs to zero
	if (isNaN(answerValue)) {
		answerValue = 0;
	}
	return answerValue;
}
// calc score with answerScore function
 var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
	console.log("CalcScore: " + calcScore); // it works!
// function to return correct answer string
	function correctAnswer (correctStringNo, qNumber) {
		console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}
