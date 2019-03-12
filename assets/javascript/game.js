// make global variable to use in object
var userGuess;

//object to hold game elements
var hangman = {
    secretWords: ["spiderman", "batman", "wonderwoman", "flash", "superman"],
    wins: 0,
    guessedLettersArray: [],
    secretWordAnswer: [],
    underscoreArray: [],
    remainingGuesses: 10,
    gameStart: false,




    // start game function to reset game values
    beginGame: function () {
        // debugger;
        hangman.gameStart = true;
        console.log(hangman.gameStart);


        // hangman.guessedLettersArray = []; // array to store incorrect key entry from user.
        // // console.log(hangman.guessedLettersArray)
        // hangman.secretWordAnswer = []; // selected random word split into characters in array.
        // // console.log(hangman.secretWordAnswer)
        // hangman.underscoreArray = [];  // array to push "_" for each [i (letter)] in split selected word.
        // // console.log(hangman.underscoreArray)
        // hangman.remainingGuesses = 10;
        // // console.log(hangman.remainingGuesses)

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

        document.getElementById("wins").innerHTML = hangman.wins;
        // document.getElementById("answer").innerHTML = hangman.underscoreArray;
        document.getElementById("guessedLetters").innerHTML = hangman.guessedLettersArray;
        document.getElementById("remainingGuesses").innerHTML = hangman.remainingGuesses;
        // call function to start gameplay
        hangman.gamePlay();

    },

    gamePlay: function () {
        // debugger;
        var success = false;
        var finish = true;
        var count = hangman.wins



        // remove commas from underscare array.
        // hangman.noCommaArray = hangman.underscoreArray.join(" ");
        // console.log(hangman.noCommaArray);


        // want to display these initial values in our DOM


        // gameplay loop to determin if key event pressed by user is equal to a letter in secretWordAnswer.
        for (var i = 0; i < hangman.secretWordAnswer.length; i++) {
            if (hangman.secretWordAnswer[i] === userGuess ) {
                hangman.underscoreArray[i] = userGuess;
                success = true;
            }
        }
        document.getElementById("answer").innerHTML = hangman.underscoreArray.join(" ");
            if (hangman.secretWordAnswer.indexOf(userGuess) < 0) {
                hangman.guessedLettersArray.push(userGuess);
                document.getElementById("guessedLetters").innerHTML = hangman.guessedLettersArray.join(" ");
            }
        // for (var i = 0; i < hangman.secretWordAnswer.length; i++) {
        //     if (hangman.secretWordAnswer[i] != userGuess && userGuess != hangman.guessedLettersArray.indexOf()) {
                

        //         success = false;
        //     }
        // }
        // if (hangman.guessedLettersArray != userGuess && hangman.secretWordAnswer[i] != userGuess) {
        //     success = false;
        //     hangman.guessedLettersArray.push(userGuess)
        //     document.getElementById("guessedLetters").innerHTML = hangman.guessedLettersArray.join(" ");
        // }
        hangman.remainingGuesses--;
        
        // for (var i = 0; i < hangman.secretWordAnswer.length; i++) {
        //     if (hangman.secretWordAnswer[i] != userGuess) {
        //     hangman.guessedLettersArray[i] != userGuess;
        //     }
        // }
        if (success = false && hangman.remainingGuesses > 0) {
            hangman.remainingGuesses--;
            document.getElementById("remainingGuesses").innerHTML = hangman.remainingGuesses;
        }
        
        if (success = true && hangman.underscoreArray === hangman.secretWordAnswer) {
            alert("You Win");
            count++;
            document.getElementById("wins").innerHTML = count;
        }
        
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


