//Possible words to guess
var words = ['jason', 'kaitlyn', 'lora', 'matthew'];
// var wordsLetters = function words.split(''){

// }

//Computer picks random word to guess
function getItem(){
    document.getElementById("wordGuess").innerHTML = words[Math.floor(Math.random() * words.length)];
}

//This code captures the keypress and prints it out on the screen
var guessesLeft = 9;

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var lettersGuessed = String.fromCharCode(charCode);
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
	document.getElementById("guessesLeft").innerHTML = + guessesLeft;
	guessesLeft --;

	if (guessesLeft === -1){
		alert("You Loose!");
	}
};












//Removes the letter after it is clicked or selected
function removeLetter(i) {
	document.getElementById(i).innerHTML= "_";
	document.getElementById("guessesLeft").innerHTML = + guessesLeft;
	guessesLeft --;

	if (guessesLeft === -1){
		alert("You Loose!");
	}
}

//Replaces the letter with blank after it is clicked or selected
function replaceLetter(x) {
	for (i=0; i<words.length; i++) {
		var ul = document.getElementById("wordGuess");
		var liArray = ul.getElementsByTagName("li");
		if (words[i] == x ) {
			liArray[i].innerHTML = x;
		 }
	}
}