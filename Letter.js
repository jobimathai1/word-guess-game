/*
a function expression "Letter" which constructs
the whether the letter guessed by the user
are correct & what to do if guessed correctly or incorrectly
*/

const Letter = (value) => {
    this.letter = value;
    this.guessed = false;
    this.toString = () => {
        if (this.letter === " "){
            this.guessed = true;
            return " ";
        } else {
            if(this.guessed === false) {
                return " ";
            } else {
                return this.letter;
            }
        }
    };

    /*
    If the guess is correct, the make guessed = true
    */
    this.guess = (guess) => {
        if(guess === this.letter){
            this.guessed = true;
        }
    }
}
module.exports = Letter;