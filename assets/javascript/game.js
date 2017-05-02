/* Top Ten flowers sold in the USA
Roses
Lilies
Daisies
Tulips
Orchids
Lilacs
Carnations
Hydrangeas
Sunflowers
Pansy

1. User needs to guess correct letters to fill in the blank
2. If a wrong letter is guess, take away one guess and put that letter in the "letters already guessed" bank
3. If a correct letter is guessed, fill in all blanks that have that particular letter
4. The computer looks at the word, and matches then the player gets a point

The computer must recognize which characters match the characters in the words
The computer must recognize which characters do not match and add them to the "letters already guessed" bank

*/

//VARIABLES ===========================
//arrays and variables for holding data
var wordOptions = ["roses", "lilies", "daisies", "tulips", "orchids", "lilacs", "carnations", "hydrangeas", "sunflowers", "pansies"];
//solution
var selectedWord = "";
//letters in chosen word
var lettersInWord = [];
//number of letters in chosen word
var numBlanks = 0;
//blank and solved letters
var blanksAndSuccesses = []; //j _ _ _ _ _ _ 
//holds all the wrong guesses
var wrongLetters = [];

//game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;


// FUNCTIONS ===========================
//computer selects a word from our word options
function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	//need to split word to separate letters
	lettersInWord = selectedWord.split("");
	//number of blanks in word 
	numBlanks = lettersInWord.length;

	//RESETTING the game - each player gets 10 tries
	guessesLeft = 9;
	//resetting wrong letters bank to 0 for each new game
	wrongLetters = [];
	//resetting blanks and successes so player doesnt see info from previous games
	blanksAndSuccesses = [];

	//POPULATING blanks and successes with correct # of blanks using for loop
	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	//CHANGE HTML to reflect game round conditions 
	//sets # of blanks per word (join allows blanks to populate w/o commas in between)
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	//display the # of guesses left
	document.getElementById("remainingGuess").innerHTML = guessesLeft;
	//# of wins
	document.getElementById("winCount").innerHTML = winCount;
	//# losses
	document.getElementById("lossCount").innerHTML = lossCount;


	//testing
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

//check letters that the user types
function checkLetters(letter) {
	//check if letter exists anywhere in the word
	var isLetterInWord = false;
	for (var i=0; i<numBlanks; i++){
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	//check where in word the letter exists, then populate out blanksandsuccesses array 
	if (isLetterInWord) {
	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			blanksAndSuccesses[i] = letter;
		}
	} 
}

//letter wasnt found
else {
	wrongLetters.push(letter);
	guessesLeft--
}

//logger
console.log(blanksAndSuccesses);
}

function roundComplete(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessesLeft);

	//update the HTML to reflect most recent information 
	document.getElementById("remainingGuess").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


	//check if user won
	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You won!");

		//update counter in HTML
		document.getElementById("winCount").innerHTML = winCount;

		startGame();
	}
	
	//check if user lost
	else if (guessesLeft == 0) {
		lossCount++;
		alert("You lost!");

		//update the html
		document.getElementById("lossCount").innerHTML = lossCount;

		startGame();
	}

}


// MAIN PROCESS ===========================
startGame();

//this begins the game when the user hits a key
document.onkeyup = function(event) {
	//variable for the letter than user guesses
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	//testing/debugging
	console.log(letterGuessed);
}








