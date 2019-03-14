// make global variable to use in object
var userGuess;
// const imageDiv = document.getElementById("update")
// console.log(imageDiv)
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var img = document.createElement("img");
img.src = "assets/images/lose.jpg";


//object to hold game elements
var hangman = {
    secretWords: ["spiderman", "batman", "wonderwoman", "flash", "superman", "catwoman",],
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
        // update hangman images when guesses --.
        if (hangman.remainingGuesses === 5) {
            document.getElementById("update").setAttribute("src","assets/images/Hangman-img1.jpg");
        }
        if (hangman.remainingGuesses === 4) {
            document.getElementById("update").setAttribute("src","assets/images/Hangman-img2.jpg");
        }
        if (hangman.remainingGuesses === 3) {
            document.getElementById("update").setAttribute("src","assets/images/Hangman-img3.jpg");
        }
        if (hangman.remainingGuesses === 2) {
            document.getElementById("update").setAttribute("src","assets/images/Hangman-img4.jpg");
        }
        if (hangman.remainingGuesses === 1) {
            document.getElementById("update").setAttribute("src","assets/images/Hangman-img5.jpg");
        }
        if (hangman.remainingGuesses < 0) {
            document.getElementById("update").setAttribute("src","assets/images/Hangman-img6.jpg");
        }

        //update game stats
        document.getElementById("answer").innerHTML = hangman.underscoreArray.join(" ");
        document.getElementById("guessedLetters").innerHTML = hangman.guessedLettersArray.join(" ");
        document.getElementById("remainingGuesses").innerHTML = hangman.remainingGuesses;
        //adds count to wins count and wins reset game
        if (hangman.secretWordAnswer.join("") === hangman.underscoreArray.join("") && hangman.remainingGuesses > 0) {
            document.getElementById("answer").innerHTML = hangman.underscoreArray.join(" ");
            hangman.wins++;
            hangman.reset();
        }
        // loses reset game
        if (hangman.remainingGuesses === 0) {
            hangman.reset();
        }
    },
    // Function called when win to reset game stats
    reset: function () {
        if (hangman.wins > 0) {
            hangman.remainingGuesses = 6;
            hangman.underscoreArray = [];
            hangman.secretWordAnswer = [];
            hangman.guessedLettersArray = [];
        }
        else {
            document.getElementById("update").setAttribute("src","assets/images/Hangman-img6.jpg");
            hangman.wins = 0;
            hangman.remainingGuesses = 6;
            hangman.underscoreArray = [];
            hangman.secretWordAnswer = [];
            hangman.guessedLettersArray = [];
        }
        hangman.gameStart = false;
        //update reset stats
        document.getElementById("answer").innerHTML = hangman.underscoreArray.join(" ");
        document.getElementById("wins").innerHTML = hangman.wins;
        document.getElementById("guessedLetters").innerHTML = hangman.guessedLettersArray;
        document.getElementById("remainingGuesses").innerHTML = hangman.remainingGuesses;
        
        if (hangman.gameStart === false) {
            document.getElementById("update").setAttribute("src","assets/images/Hangman_8.jpg");
        }
    }
     



}


// using press any key to start the game
document.onkeyup = function (event) {
    userGuess = event.key;
    if (letter.indexOf(userGuess) != -1) {


        console.log(hangman.gameStart);
        // calls start of game only if gameStart = true.
        if (hangman.gameStart === false) {
            console.log("gameStart = false");
            hangman.beginGame(event.key);
        } else if (hangman.gameStart === true) {
            console.log(event.keycode)
            hangman.gamePlay(event.keycode);
            
        }
    }
}


