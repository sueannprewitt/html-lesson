	var theNumber = 0
		var TotalNumber = 0

		function getRandomNumber() {
				theNumber = Math.floor(Math.random() * 6) + 1;
			var idCtrl = document.getElementById("theRoll");
			idCtrl.value = theNumber;				
			}

			function rollDie() {
			getRandomNumber();
			if(theNumber == 1) {
				var spanCtrl = document.getElementById("message");
				spanCtrl.textContent = "Game Over! Your total was" + TotalNumber;
				TotalNumber = 0;

			}else {
				TotalNumber += theNumber
				display();
			}

				}

		function display() {
			var spanCtrl = document.getElementById("message");
			spanCtrl.textContent = TotalNumber + "Roll Again!";
		}
	