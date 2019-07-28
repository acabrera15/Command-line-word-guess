var Letter = require("./Letter");

function Word() {
  this.letterArray = [];
}

Word.prototype.setWord = function(inputWord) {
  for (let i = 0; i < inputWord.length; i++) {
    if (inputWord[i] === " ") {
      this.letterArray.push(" ");
    } else {
      this.letterArray.push(new Letter(inputWord[i]));
    }
  }
};

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

module.exports(Word)