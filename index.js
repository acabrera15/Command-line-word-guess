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
var Word = require('./Word')

/**
 * takes in an array and returns an array of
 * 5 random items from the array
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

var playGame = function(wordsToGuess) {
    var guesses = 10;

    for (var i = 0; i < wordsToGuess.length; i++) {
        var word = new Word();
        word.setWord(wordsToGuess[i]);
    }

    inquirer
}

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
          var songsToGuess = getRandomSongs(anthonyGreenSongs);
          console.log(songsToGuess);
      } else if (response.band === "Metallica Songs") {
          var songsToGuess = getRandomSongs(metallicaSongs);
          console.log(songsToGuess);
      } else if (response.band === "Circa Survive Songs") {
          var songsToGuess = getRandomSongs(circaSurviveSongs);
          console.log(songsToGuess);
      } else {
          console.log("there is an error")
      }
    })
    .catch(function(error) {
      console.log(error);
    });  
}

startGame();
