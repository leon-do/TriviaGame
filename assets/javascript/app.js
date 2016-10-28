

// ========================== make variables ======================
	var setNumber;
	var correctVar = 0;
	var incorrectVar = 0;
	var outOfTimeVar = 0;

// ========================== call set1 ======================

	set1();

// ========================== set 1 ======================

	function set1(){
	// this is set number 1
		setNumber = 1;

	// display set number on the screen
		$(".setDiv").text("set: " + setNumber)

	// questions and anwers
		var questionA = "cats or dogs?"
		var choice1A = "dogs"
		var choice2A = "cats"

	// add text to the div
		$(".questionDiv").text(questionA);
		$(".choice1Div").text(choice1A);
		$(".choice2Div").text(choice2A);		


	// when the user clicks on the green div (choice1Div)
		$(".choice1Div").click(function(){

			counter = 999999;

			// if we're in set 1...
			if (setNumber == 1){				

				// then display the popup
				$(".popup").css("display","block")

				// then add text to popup
				$(".popup").text("CORRECT: dogggg");

				// add 1 to var correct
				correctVar++

				// then hide popup in 3 seconds
				setTimeout(function(){
					$(".popup").css("display","none")
				},3000)

				//then call function
				set2();
			}
		})


	// when the user clicks on the blue div (choice2Div)
		$(".choice2Div").click(function(){

			counter = 999999;


			if (setNumber == 1){

				$(".popup").css("display","block")

				$(".popup").text("INCORRECT: catttt");

				// add 1 to incorrect var
				incorrectVar++

				setTimeout(function(){
					$(".popup").css("display","none")
				},3000)

				set2();

			}
		})


	} // set1


// ========================== set 2 ======================

	function set2(){

		counter = 10;

		setNumber = 2;
		$(".setDiv").text("set: " + setNumber)

		var questionB = "up or down?"
		var choice1B = "up"
		var choice2B = "down"

		$(".questionDiv").text(questionB);
		$(".choice1Div").text(choice1B);
		$(".choice2Div").text(choice2B);		


		$(".choice1Div").click(function(){

			counter = 999999;

			if (setNumber == 2){
				$(".popup").css("display","block")

				$(".popup").text("INCORRECT: upppp");

				incorrectVar++;

				setTimeout(function(){
					$(".popup").css("display","none")
				},3000)

				set3();
			}
		})


		$(".choice2Div").click(function(){

			counter = 999999;

			if (setNumber == 2){
				$(".popup").css("display","block")

				$(".popup").text("KORRECT: downnn");

				correctVar++;

				setTimeout(function(){
					$(".popup").css("display","none")
				},3000)

				set3();
			}
		})

	} 


// ========================== set 3 ======================
	
	function set3(){

		counter = 10;


		setNumber = 3;
		$(".setDiv").text("set: " + setNumber)

		var questionC = "Right or Left?"
		var choice1C = "right"
		var choice2C = "left"

		$(".questionDiv").text(questionC);
		$(".choice1Div").text(choice1C);
		$(".choice2Div").text(choice2C);		


		$(".choice1Div").click(function(){

			counter = 999999;


			if (setNumber == 3){
				$(".popup").css("display","block")

				$(".popup").text("INKORRECT: rightttt");

				incorrectVar++

				setTimeout(function(){
					$(".popup").css("display","none")
				},3000)

				set4();
			}
		})


		$(".choice2Div").click(function(){

			counter = 999999;


			if (setNumber == 3){
				$(".popup").css("display","block")

				$(".popup").text("CHORRECT: leftttt");

				correctVar++

				setTimeout(function(){
					$(".popup").css("display","none")
				},3000)

				set4();
			}
		})

	}



// ========================== set 4 ======================
	
	function set4(){

		counter = 10;

		setNumber = 4;
		$(".setDiv").text("set: " + setNumber)

		var questionD = "On or Off?"
		var choice1D = "on"
		var choice2D = "off"

		$(".questionDiv").text(questionD);
		$(".choice1Div").text(choice1D);
		$(".choice2Div").text(choice2D);		


		$(".choice1Div").click(function(){

			counter = 999999;


			if (setNumber == 4){
				$(".popup").css("display","block")

				$(".popup").text("CORRECTT: onnnnn");

				correctVar++

				setTimeout(function(){
					$(".popup").css("display","none")
				},3000)

				set5();
			}
		})


		$(".choice2Div").click(function(){

			counter = 999999;


			if (setNumber == 4){
				$(".popup").css("display","block")

				$(".popup").text("INCORECT: offf");

				incorrectVar++;

				setTimeout(function(){
					$(".popup").css("display","none")
				},3000)

				set5();
			}
		})

	}



// ========================== set 5 ======================
	
	function set5(){

		counter = 10;

		setNumber = 5;
		$(".setDiv").text("set: " + setNumber)

		var questionC = "Day or Night?"
		var choice1C = "day"
		var choice2C = "night"

		$(".questionDiv").text(questionC);
		$(".choice1Div").text(choice1C);
		$(".choice2Div").text(choice2C);		


		$(".choice1Div").click(function(){

			counter = 999999;


			if (setNumber == 5){
				$(".popup").css("display","block")

				$(".popup").text("INKORRECT: dayyyy");

				incorrectVar++

				setTimeout(function(){
					$(".popup").css("display","none")

					//displays correct/incorrect scores
					displayScore()
				},3000)

			}
		})


		$(".choice2Div").click(function(){

			counter = 999999;


			if (setNumber == 5){
				$(".popup").css("display","block")

				$(".popup").text("CORECCT: nighttt");

				correctVar++

				setTimeout(function(){
					$(".popup").css("display","none")

					//displays correct/incorrect scores
					displayScore()
				},3000)

			}
		})

	}


// ========================== display score ======================

	function displayScore(){
		// stop the timer
		window.clearTimeout(theTimer);

		// make popup display
		$(".popup").css("display","block")

		//put text in popup
		$(".popup").html(
			"Correct guesses: " + correctVar + "<br>" +
			"incorrect guesses: " + incorrectVar + "<br>" +
			"Unanswered guesses: " + outOfTimeVar)
	}



// ========================== timer ======================

	var counter = 5;

	//The setInterval() does something every 1000 milliseconds.
	var theTimer = setInterval(function(){ 

		// display counter on screen
		$(".timerDiv").html(counter)
		counter--

		// if out of time...
		if (counter == -1){
			// then add 1 to out of time variable
			outOfTimeVar++
			console.log(outOfTimeVar)
		}


		// if counter is from 0 to -3...
		if (counter < 0){

			// then display popup
			$(".popup").css("display","block")

			// then add text based on set
			if (setNumber == 1){
				$(".popup").text("Out Of Time. Answer is dogs")
			}
			if (setNumber == 2){
				$(".popup").text("Out Of Time. Answer is down")
			}
			if (setNumber == 3){
				$(".popup").text("Out Of Time. Answer is left")
			}
			if (setNumber == 4){
				$(".popup").text("Out Of Time. Answer is on")
			}
			if (setNumber == 5){
				$(".popup").text("Out Of Time. Answer is night")
			}
		}


		//if counter is less than -3...  (this displays the popup for 3 seconds)
		if (counter < -3){

			// reset the counter
			counter = 5;

			// then hide popup
			$(".popup").css("display","none")

			if (setNumber == 1){
				set2();
			} else if (setNumber == 2){
				set3();
			} else if (setNumber == 3){
				set4();
			} else if (setNumber == 4){
				set5()
			} else if (setNumber == 5){
				displayScore()
			}

		}

	},1000)



