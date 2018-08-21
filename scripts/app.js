/*global Hangman generatePuzzle */

let game1
const maxTries = 7

const renderGame = game => {
    document.querySelector('#display-word').setAttribute('style', 'initial') 
    document.querySelector('#display-word').textContent = game.puzzle
    document.querySelector('#guess').value = ''
    document.querySelector('#guess-msg').textContent = game.statusMsg
    document.querySelector('#guessed').innerHTML = game.guessedLetters
    document.querySelector('#remaining').textContent = game.lettersRemaining.toString()
    document.querySelector('#tries-left').textContent = `${game.remainingAttempts}/${game.maxAttempts}`
    if (game.status === 'won' || game.status === 'lost' ) {
        document.querySelector('#display-word').textContent = game.originalWord
        document.querySelector('#display-word').setAttribute('style',
            (game.status === 'won') ? 'color:chartreuse' : 'color:orangered')
        document.querySelector('#guess').disabled = true
    } else document.querySelector('#guess').disabled = false
}

generatePuzzle().then (
    puzzle => renderGame (game1 = new Hangman (puzzle, maxTries)),
    err => {throw err})

document.querySelector('#guess-form').addEventListener('submit', e => {
    e.preventDefault()
    game1.guess (e.target.elements.guess.value.toLowerCase())
    renderGame (game1)
})

document.querySelector('#guess').addEventListener('input', (e) => {
    const data = e.target.value.toLowerCase()
    if (data && ((data < 'a') || (data > 'z'))) {
        document.querySelector('#guess-msg').textContent = 'Please enter a letter'
        e.target.value = ''
        playError()
    } 
})

document.querySelector('#word-count').addEventListener('input', (e) => {
    const data = e.target.value
    if (data && ((data < '1') || (data > '9'))) {
        document.querySelector('#new-game-msg').textContent = 'Please enter word count'
        e.target.value = ''
        playError()
    } else document.querySelector('#new-game-msg').textContent = ''
})

document.querySelector('#new-game-form').addEventListener('submit', e => {
    e.preventDefault()
    generatePuzzle (e.target.elements.wordCount.value).then (
        puzzle => {
            renderGame (game1 = new Hangman (puzzle, maxTries))
            document.getElementById('guess').focus()
        },err => {throw err})
})