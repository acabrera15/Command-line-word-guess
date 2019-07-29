var Letter = require("./Letter");

function Word() {
  this.letterArray = [];
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
 * 
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

Word.prototype.checkWord = function(letter) {
    var containsLetter = false;
    var wordHasLetter = false;
    for (var i = 0; i < this.letterArray.length; i++) {
        if (this.letterArray[i] != ' ') {
            containsLetter = this.letterArray[i].checkLetter(letter);
        }
        if (containsLetter) {
            wordHasLetter = true;
        }
    }
    return wordHasLetter;
}

module.exports = Word;