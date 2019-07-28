function Letter(letter) {
    this.letter = letter;
    this.isGuessed = false;
}

Letter.prototype.getLetter = function() {
    if (this.isGuessed) {
        return this.letter;
    } else {
        return '_';
    }
}

Letter.prototype.checkLetter = function(inputLetter) {
    if (inputLetter.toUpperCase() === this.letter.toUpperCase()) {
        this.isGuessed = true;
    }
    return this.isGuessed;
}

module.exports = Letter;