//songs to choose from
var metallicaSongs = [
  "Enter Sandman",
  "Through the Never",
  "For Whom The Bell Tolls",
  "Fuel",
  "All Nightmare Long",
  "The Unforgiven",
  "Moth into Flame",
  "Creeping Death",
  "The Call of Ktulu",
  "Fade to Black"
];

var anthonyGreenSongs = [
  "She Loves Me So",
  "Babygirl",
  "Springtime Out the Van Window",
  "Vera Lynn",
  "A Little Death",
  "Love",
  "Better Half",
  "Conversation Piece",
  "Pixie Queen",
  "East Coast Winters"
];

var circaSurviveSongs = [
  "Strange Terrain",
  "The Longest Mile",
  "Dyed in the Wool",
  "We're All Thieves",
  "The Glorious Nosebleed",
  "Child of the Desert",
  "Only the Sun",
  "Lustration",
  "Flesh and Bone",
  "On Letting Go"
];

var inquirer = require("inquirer");
var Word = require("./Word");
var guessedLetters = [];
var wordCount = 0;
var songsToGuess = [];
/**
 * takes in an array and returns an array of
 * 5 random items from the input array
 */
var getRandomSongs = function(inputArray) {
  var fiveSongsToGuess = [];
  var randomNumber = 0;
  var numbers = [];

  for (var i = 0; i < 5; i++) {
    randomNumber = Math.floor(Math.random() * 10);
    while (numbers.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 10);
    }
    fiveSongsToGuess.push(inputArray[randomNumber]);
    numbers.push(randomNumber);
  }

  return fiveSongsToGuess;
};

var promptToGuessWord = function(word, guesses) {
  console.log();
  console.log(`Guesses: ${guesses}`);
  inquirer
    .prompt([
      {
        message: "Guess a letter: ",
        name: "letter",
        type: "input",
        validate: function(input) {
          var okay = false;
          okay = input.length === 1;
          if (okay) {
            okay = input.toUpperCase() != input.toLowerCase();
          }
          return okay;
        }
      }
    ])
    .then(function(response) {
      var letterInput = response.letter;

      if (!guessedLetters.includes(letterInput)) {
        guessedLetters.push(letterInput);

        if (!word.checkWord(letterInput)) {
          console.log("INCORRECT");
          guesses--;
          if (guesses === 0) {
            return;
          }
          console.log(word.getWord());
          promptToGuessWord(word, guesses);
        } else {
          console.log("CORRECT!");
          console.log(word.getWord());
          if (!word.wordGuessed) {
            promptToGuessWord(word, guesses);
          } else {
            console.log("You have succesfully guessed the song!!!");
            wordCount++;
            guessedLetters = [];
            if (wordCount === 5) {
              console.log("You have guessed all the song available.");
              inquirer
                .prompt([
                  {
                    message: "Would you like to play again?",
                    name: "answer",
                    choices: ["yes", "no"],
                    type: "list"
                  }
                ])
                .then(function(response) {
                  if (response.answer === "yes") {
                    wordCount = 0;
                    startGame();
                  } else {
                    console.log("Enjoy the rest of your day.");
                    return;
                  }
                })
                .catch(function(err) {
                  console.log(err);
                });
            } else {
              playGame();
            }
          }
        }
      } else {
        console.log("Letter already guessed");
        promptToGuessWord(word, guesses);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};

var playGame = function() {
  var guesses = 10;

  var word = new Word();
  word.setWord(songsToGuess[wordCount]);
  console.log(word.getWord());
  promptToGuessWord(word, guesses);
};

var startGame = function() {
  inquirer
    .prompt([
      {
        message: "What song names would you like to guess?",
        type: "list",
        choices: [
          "Circa Survive Songs",
          "Metallica Songs",
          "Anthony Green Songs"
        ],
        name: "band"
      }
    ])
    .then(function(response) {
      console.log(response);

      if (response.band === "Anthony Green Songs") {
        songsToGuess = getRandomSongs(anthonyGreenSongs);
        playGame();
      } else if (response.band === "Metallica Songs") {
        songsToGuess = getRandomSongs(metallicaSongs);
        playGame();
      } else if (response.band === "Circa Survive Songs") {
        songsToGuess = getRandomSongs(circaSurviveSongs);
        playGame();
      } else {
        console.log("there is an error");
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};

startGame();
