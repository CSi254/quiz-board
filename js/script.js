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
