var Letter = require("./Letter");

function Word() {
  this.letterArray = [];
  this.wordGuessed = false;
}

/**
 * takes in a word string and converts it into a Word type
 */
Word.prototype.setWord = function(inputWord) {
  for (let i = 0; i < inputWord.length; i++) {
    if (inputWord[i] === " ") {
      this.letterArray.push(" ");
    } else {
      this.letterArray.push(new Letter(inputWord[i]));
    }
  }
};

/**
 * returns a string representation of the Word object.
 */
Word.prototype.getWord = function() {
  var word = "";

  this.letterArray.forEach(function(letter) {
    if (letter === " ") {
      word += letter;
    } else {
      word += letter.getLetter();
    }
    word += ' ';
  });

  return word;
};

/**
 * inputs a letter and checks to see if the word contains
 * the letter
 */
Word.prototype.checkWord = function(letter) {
    var containsLetter = false;
    var wordHasLetter = false;
    for (var i = 0; i < this.letterArray.length; i++) {
        if (this.letterArray[i] !== ' ' && this.letterArray[i].isGuessed === false) {
            containsLetter = this.letterArray[i].checkLetter(letter);
        }
        if (containsLetter) {
            wordHasLetter = true;
        }
    }

    this.wordGuessed = !this.getWord().includes('_');

    return wordHasLetter;
}

module.exports = Word;