class Hangman {
    constructor (word, maxAttempts) {
        this.originalWord = word
        this.wordArray = word.toLowerCase().split('')
        this.maxAttempts = maxAttempts
        this.remainingAttempts = maxAttempts
        this.guesses = []
        this.status = 'playing'
    }

    get statusMsg () { 
        let msg = ''
        switch (this.status) {
            case 'playing': msg = ''; break
            case 'invalid': msg = 'Please enter a letter'; break
            case 'guessed': msg = 'You already guessed this'; break
            case 'lost': msg = 'You lost!!'; break
            case 'won': msg = 'You Won!!'; break
        }    
        return msg
    }

    get puzzle () {
        let dW = ''
        this.wordArray.forEach((lW, i) => 
            dW += (this.guesses.includes(lW) || lW === ' ') ? 
                this.originalWord.substr(i, 1) : '_')
        return dW
    }

    guess (letter) {
        if (letter < 'a' || letter > 'z') this.status = 'invalid'
        else if (this.guesses.includes(letter)) this.status = 'guessed'
        else {
            this.guesses.push(letter)
            if (this.originalWord === this.puzzle) this.status = 'won'
            else {
                if (!this.wordArray.includes(letter)) this.remainingAttempts--
                this.status = this.remainingAttempts ? 'playing' : 'lost'
            }
        }
    }
}