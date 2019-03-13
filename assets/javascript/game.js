// make global variable to use in object
var userGuess;

//object to hold game elements
var hangman = {
    secretWords: ["spiderman", "batman", "wonderwoman", "flash", "superman"],
    wins: 0,
    guessedLettersArray: [],
    secretWordAnswer: [],
    underscoreArray: [],
    remainingGuesses: 6,
    gameStart: false,



    // start game function to reset game values
    beginGame: function () {
        // debugger;
        hangman.gameStart = true;
        console.log(hangman.gameStart);

        // Function we call to pick a random word from our hangman object secretWords.
        var randomSecretWord = hangman.secretWords[Math.floor(Math.random() * hangman.secretWords.length)];
        console.log(randomSecretWord);
        // create a new array to store the random word as a string with spaces removed.
        hangman.secretWordAnswer = randomSecretWord.split("");
        console.log(hangman.secretWordAnswer);
        // loop through each element (letter) in randomSecretWord to return "_" for each position [i].
        for (var i = 0; i < randomSecretWord.length; i++) {
            hangman.underscoreArray.push("_");

            console.log(this.underscoreArray);
            // console.log("answer");
        }
        // want to display these initial values in our DOM
        document.getElementById("answer").innerHTML = hangman.underscoreArray.join(" ");
        document.getElementById("wins").innerHTML = hangman.wins;
        document.getElementById("guessedLetters").innerHTML = hangman.guessedLettersArray;
        document.getElementById("remainingGuesses").innerHTML = hangman.remainingGuesses;
        // call function to start gameplay
        // hangman.gamePlay();
    

    },

    gamePlay: function () {
        // debugger;
        var finish = false;

        // gameplay loop to determin if key event pressed by user is equal to a letter in secretWordAnswer.
        for (var i = 0; i < hangman.secretWordAnswer.length; i++) {
            if (hangman.secretWordAnswer[i] === userGuess ) {
                hangman.underscoreArray[i] = userGuess;
            }
        }
        // if userGuess is not in the answer puts the letter in guessedLetterArray. does not allow same letter more than once.
        if (hangman.secretWordAnswer.includes(userGuess) != true  && hangman.guessedLettersArray.includes(userGuess) != true) {
            hangman.guessedLettersArray.push(userGuess);
            hangman.remainingGuesses--;
        }



        document.getElementById("answer").innerHTML = hangman.underscoreArray.join(" ");
        document.getElementById("guessedLetters").innerHTML = hangman.guessedLettersArray.join(" ");
        document.getElementById("remainingGuesses").innerHTML = hangman.remainingGuesses;
        
        if (hangman.secretWordAnswer.join("") === hangman.underscoreArray.join("") && hangman.remainingGuesses > 0) {
            document.getElementById("answer").innerHTML = hangman.underscoreArray.join(" ");
            hangman.wins++;
            hangman.reset();

        }
        if (hangman.remainingGuesses === 0) {
            hangman.reset();
        }
    },
    // Function called when win to reset game stats
    reset: function () {
        if (hangman.wins > 0) {
            hangman.remainingGuesses = 10;
            hangman.underscoreArray = [];
            hangman.secretWordAnswer = [];
            hangman.guessedLettersArray = [];
        }
        else {
            hangman.wins = 0;
            hangman.remainingGuesses = 10;
            hangman.underscoreArray = [];
            hangman.secretWordAnswer = [];
            hangman.guessedLettersArray = [];
        }
        hangman.gameStart = false;

        document.getElementById("answer").innerHTML = hangman.underscoreArray.join(" ");
        document.getElementById("wins").innerHTML = hangman.wins;
        document.getElementById("guessedLetters").innerHTML = hangman.guessedLettersArray;
        document.getElementById("remainingGuesses").innerHTML = hangman.remainingGuesses;
    }



}


// using press any key to start the game
document.onkeyup = function (event) {
    userGuess = event.key;
    // debugger;
    // console.log(userGuess);
    console.log(hangman.gameStart);
    // calls start of game only if gameStart = true.
    if (hangman.gameStart === false) {
        console.log("gameStart = false");
        hangman.beginGame(event.key);
    } else if (hangman.gameStart === true) {
        hangman.gamePlay(event.key);
    }
}


