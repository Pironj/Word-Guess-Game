//object to hold game elements
    var hangman = {
        secretWords: ["spiderman", "batman", "wonderwoman", "flash", "black panther"],
        wins: 0,
        guessedLettersArray: [],
        secretWordAnswer: [],
        underscoreArray: [],
        noCommaArray: [],
        remainingGuesses: 10,
        gameStart: false,



        // start game function to reset game values
        beginGame: function () {
            // debugger;
            hangman.gameStart = true;
            console.log(hangman.gameStart);
            
           
            hangman.guessedLettersArray = []; // array to store incorrect key entry from user.
            // console.log(hangman.guessedLettersArray)
            hangman.secretWordAnswer = []; // selected random word split into characters in array.
            // console.log(hangman.secretWordAnswer)
            hangman.underscoreArray = [];  // array to push "_" for each [i (letter)] in split selected word.
            // console.log(hangman.underscoreArray)
            hangman.remainingGuesses = 10;
            // console.log(hangman.remainingGuesses)


            // call function to start gameplay
            hangman.gamePlay();
            
        },
        
        gamePlay: function () {
            // debugger;
            var success = false;
            var finish = true;

            // Function we call to pick a random word from our hangman object secretWords.
            var randomSecretWord = hangman.secretWords[Math.floor(Math.random() * hangman.secretWords.length)];
            console.log(randomSecretWord);
            // create a new array to store the random word as a string with spaces removed.
            hangman.secretWordAnswer = randomSecretWord.split("");
            console.log(hangman.secretWordAnswer);
            // loop through each element (letter) in randomSecretWord to return "_" for each position [i].
            for (var i = 0; i < randomSecretWord.length; i++) {
                this.underscoreArray.push("_");

                // console.log(this.underscoreArray);  
                // console.log("answer");
            }
            // remove commas from underscare array.
            hangman.noCommaArray = hangman.underscoreArray.join(" ");
    
            // want to display these initial values in our DOM
            document.getElementById("wins").innerHTML = this.wins;
            document.getElementById("answer").innerHTML = this.noCommaArray;
            document.getElementById("guessedLetters").innerHTML = this.guessedLettersArray;
            document.getElementById("remainingGuesses").innerHTML = this.remainingGuesses;

            // gameplay loop to determin if key event pressed by user is equal to a letter in secretWordAnswer.
            for (var i = 0; i < randomSecretWord.length; i++) {
                // debugger;
                finish = false;
                if(event.key === hangman.secretWordAnswer[i]) {
                    console.log(event.key)
                    hangman.noCommaArray[i] = event.key;
                    success = true;
                    if(finish = true) {
                        alert("yay!");
                        hangman.wins++;
                        hangman.beginGame();
                    }
                }
                if(!success) {
                    hangman.remainingGuesses --;
                    hangman.guessedLettersArray.push(event.key);
                    if (remainingGuesses === 0) {
                        hangman.wins = 0;
                        hangman.beginGame();
                    }
                    
                }
                
            }
           
        }
    }


// using press any key to start the game
document.onkeyup = function () {
    // debugger;
    console.log("keyup");
    console.log(hangman.gameStart);
    // calls start of game only if gameStart = true.
    if (hangman.gameStart === false) {
        console.log("gameStart = false");
        hangman.beginGame();
    }
};
