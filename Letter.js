function Letter(letter) {
    this.letter = letter;
    this.isGuessed = false;
}

/**
 * returns the letter if it has been guessed '_' otherwise
 */
Letter.prototype.getLetter = function() {
    if (this.isGuessed) {
        return this.letter;
    } else {
        return '_';
    }
}

/**
 * inputs a letter and checks to see if the letter input is the
 * letter in the Letter object ignoring case
 */
Letter.prototype.checkLetter = function(inputLetter) {
    if (inputLetter.toUpperCase() === this.letter.toUpperCase()) {
        this.isGuessed = true;
    }
    return this.isGuessed;
}

module.exports = Letter;