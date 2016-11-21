# Hangperson-practice

Parts
 1- Hangperson game
 	a- serialization (deserialization)
 2- Express API
 3- React components
 4- Mongo DB
 5- User log-on	

 Hangperson
  
  Data Object for the game
  	. serialize()
  	. deserialize(<game>)
  	. constuctor(<word>)
  	. isGameOver()
  	. isWordGuessed()
  	. guess(<letter>)

  Serialization
  	. Word to guess	
  	. Length of word to guess
  	. Guessed letters
  	. Guessed remaining
  	. Max guesses


  Express API	
   . /hangperson
   		. POST /new 
   		. GET /current
   		. POST /guess
   			. letter=<letter>

   React
   	.Game
   		. Progress Visualization
   		. Guessed/unguessed letters
   		. Input

   Mongo
    . Collection of games
    	. Serialized games
    
    . Later collection of users
    	. Referenes to games or games reference users (or both?)

   User Log on 
    . /users
    	. POST /create
   		. POST /login
   		. DELETE /session
   			
 	
