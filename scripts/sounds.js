/* Source: https://www.zapsplat.com/sound-effect-category/multimedia/page/3
   Source: https://www.soundjay.com/beep-sounds-1.html

   SoundFiles are stored as .mp3 in sounds folder and loaded into memory
   variables during document load. This way even if network disconnects
   after game start, sounds will still keep working
*/

/* load the audio files into browser memory first */
const mp3GoodGuess = new Audio('sounds/GoodGuess.mp3')
const mp3BadGuess = new Audio('sounds/BadGuess.mp3')
const mp3WinGame = new Audio('sounds/WinGame.mp3')
const mp3LoseGame = new Audio('sounds/LoseGame.mp3')
const mp3Error = new Audio('sounds/Error.mp3')

/* play later on demand */
const playGoodGuess = () => mp3GoodGuess.play()
const playBadGuess = () => mp3BadGuess.play()
const playWinGame = () => mp3WinGame.play()
const playLoseGame = () => mp3LoseGame.play()
const playError = () => mp3Error.play()
