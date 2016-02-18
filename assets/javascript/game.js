//Possible words to guess
var words = ['jason'];

//Computer runs the game Hangman and picks random word to guess
function hangMan() {

	//Chooses random words and displays without blank spaces
	document.getElementById("wordGuess").innerHTML = words[Math.floor(Math.random() * words.length)];


	//Chooses random words and displays with blank spaces
	var possibleWord = words[Math.floor(Math.random() * words.length)];
	document.getElementById("blankSpaces").innerHTML = possibleWord;


	//Space out possibleWord
	var originalLength = possibleWord.length;
	for (var i = 0; i < originalLength; i++) {
	    possibleWord = [possibleWord.slice(0, i*2+1), ' ', possibleWord.slice(i*2+1)].join('');
	}

	var blankSpaces = "";
	var	wordLength = possibleWord.length;
	
	for (var i = 0; i < wordLength; i++) {
	  var x = possibleWord.charAt(i);
	  
	  if(x === " " || x === "/'")
	  {
	  	blankSpaces += x;
	  }
	  else {
	    blankSpaces += "_";
	  }
	}
	document.getElementById("blankSpaces").innerHTML = blankSpaces;


	//This code captures the keypress and prints it out on the screen it also counts down the keypresses
	var guessesLeft = 9;
	var correctString = "";
	document.onkeypress = function(keyPressed) {
	    var keyPressed = keyPressed || window.event,
		    charCode = keyPressed.keyCode || keyPressed.which,
		    lettersGuessed = String.fromCharCode(charCode);

		document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;

		guessesLeft--;

		if (guessesLeft === -1) {
			alert("You Lose!");
		}

		console.log(possibleWord);
			
		//This detects if there is a match between lettersGuessed and blankSpaces
		  for(var g = 0; g < possibleWord.length; g++){
        	//alert(lettersGuessed[g]);
			if (possibleWord[g] === lettersGuessed) {
	        	alert("You picked a correct letter");
	        	correctString = correctString + lettersGuessed + " ";
	        	console.log(correctString);
	        	document.getElementById("blankSpaces").innerHTML = correctString;
	        } 
	    }
	}
}











// //Removes the letter after it is clicked or selected
// function removeLetter(i) {
// 	document.getElementById(i).innerHTML= "_";
// 	document.getElementById("guessesLeft").innerHTML = + guessesLeft;
// 	guessesLeft --;

// 	if (guessesLeft === -1) {
// 		alert("You Lose!");
// 	}
// }

// //Replaces the letter with blank after it is clicked or selected
// function replaceLetter(x) {
// 	for (i=0; i<words.length; i++) {
// 		var ul = document.getElementById("wordGuess"),
// 			liArray = ul.getElementsByTagName("li");
// 		if (words[i] == x ) {
// 			liArray[i].innerHTML = x;
// 		 }
// 	}
// }