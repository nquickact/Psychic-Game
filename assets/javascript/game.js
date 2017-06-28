//created by Nathan Quick for Pyschic-Game

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//scores set to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = undefined;

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessedLetters.push(userGuess);
 	updateGuessLeft();
  	updateGuessSoFar();

        if (guessesLeft > 0){
        		//we have guesses left
            if (userGuess == letterToGuess){
                wins++;
                // Then we win and we'll update the html to display the win
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You are psychic, open a Taroh Card Reading shop immediately!");
                //after winning we reset
                reset();
            }
        }
        else if(guessesLeft == 0){ 
            losses++;
            // Then we lose and we'll update the html to display the loss
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Some good guesses but Psychic, I think not...");
            // when guesses left is 0 we reset 
            reset();
        }
};

	//randomizes computer guess from available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	// Here we are returning the guesses left value through the html
var updateGuessLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};
	// Updating with each round
var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
	// Here we take the guesses the user has tried and return them as letters separated by commas.
var updateGuessSoFar = function() { 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

	// Variable that resets everything
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessLeft();
  updateGuessSoFar();
}








