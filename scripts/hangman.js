class Hangman {
    constructor (word, maxAttempts) {
        this.originalWord = word
        this.wordArray = word.toLowerCase().split('')
        this.maxAttempts = maxAttempts
        this.remainingAttempts = maxAttempts
        this.guesses = []
        this.status = 'playing'
        this.lettersRemaining = Array.from('etaoinsrhldcumfpgwybvkxjqz')
    }

    get statusMsg () { 
        let msg = ''
        switch (this.status) {
            case 'playing': msg = ''; break
            // case 'invalid': msg = 'Please enter a letter'; playError(); break
            case 'guessed': msg = 'You already guessed this'; playError(); break
            case 'lost': msg = 'You lost!!';  playLoseGame(); break
            case 'won': msg = 'You Won!!'; playWinGame(); break
        }    
        return msg
    }

    /* generate the dynamic puzzle string for display */
    get puzzle () {
        let dW = ''
        this.wordArray.forEach((lW, i) => 
            dW += (this.guesses.includes(lW) || lW === ' ') ? 
                this.originalWord.substr(i, 1) : '_')
        return dW
    }

    /* create a coloured string of guessed letters */
    get guessedLetters () {
        const a = document.createElement('a')
        this.guesses.forEach (letter => {
            const s = document.createElement ('span')
            if (a.childElementCount) a.insertAdjacentText ('beforeend', ',')
            this.wordArray.includes (letter) ? 
                s.setAttribute ('class', 'goodGuess') :
                s.setAttribute ('class', 'badGuess')
            s.textContent = letter
            a.appendChild(s)
        })
        return a.innerHTML
    }

    guess (letter) {
        if (letter < 'a' || letter > 'z') this.status = 'invalid'
        else if (this.guesses.includes(letter)) this.status = 'guessed'
        else {
            this.wordArray.includes (letter) ? playGoodGuess () : playBadGuess ()
            this.guesses.push(letter)
            this.lettersRemaining.splice (
                this.lettersRemaining.findIndex (e => e === letter), 1)
            if (this.originalWord === this.puzzle) this.status = 'won'
            else {
                if (!this.wordArray.includes(letter)) this.remainingAttempts--
                this.status = this.remainingAttempts ? 'playing' : 'lost'
            }
        }
    }
}