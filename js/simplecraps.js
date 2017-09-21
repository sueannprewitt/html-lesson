theNumber = 0;

function getRandomNumber() {
	var die = Math.floor(Math.random() * 6) + 1;
	var die2 = Math.floor(Math.random() * 6) + 1;
	theNumber = die + die2;
	var idCtrl = document.getElementById("theRoll");
	idCtrl.value = theNumber;				
			}

function rollDice() {
	getRandomNumber();
	var spanCtrl = document.getElementById("message");
	var point = 0;
	if(theNumber == 7 || theNumber ==11) {
		spanCtrl.textContent = "You won!";
		return;

			}else if (theNumber == 2 || theNumber == 3 || theNumber == 12) {
			spanCtrl.textContent = "You lose!";
			return;
				
			}else {
				point = theNumber;
			}

	getRandomNumber();
	while(theNumber != 7 && theNumber != point){
		getRandomNumber();
	}
	if(theNumber == 7){
		spanCtrl.textContent = "You lose!";
	} else {
		spanCtrl.textContent = "You won!";
	}

	

}


