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


	var flowers = ["Roses", "Lilies", "Daisies", "Tulips", "Orchids", "Lilacs", "Carnations", "Hydrangeas", "Sunflowers", "Pansy"];



		// computer chooses random word

		function load() {
			console.log("Guess the word!");

		var computerChoice = flowers[Math.floor(Math.random()*options.length)];

		console.log(computerChoice);

			document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		console.log(userGuess);

		//user chooses letter and if it matches a letter in the word then fill in the blank
		if (userGuess == flowers

	}







}