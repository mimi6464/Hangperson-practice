//Data Object for the game
//***Constuctor(<word>)***
  	//. serialize()
  	//. deserialize(<game>)
  	//. constuctor(<word>)
  	//. isGameOver()
  	//. isWordGuessed()
  	//. guess(<letter>)




function Hangperson(word){
	this.word = word;
	this.wordLength = word.length;
	this.guessed = [];
	this.guessesRemaining = 10;
	this.maxGuesses = 10;
}
Hangperson.prototype.serialize = function(includeWord){
	var result={}
}
module.exports = Hangperson