import { useState } from 'react'
import words from './wordList.json'
import './assets/css/App.css'
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"


function App() {
  const[wordtoGuess, setWordtoGuess]=useState(()=>{
    return words[Math.floor(Math.random()* words.length)]
  })
  console.log(wordtoGuess)

  const[guessedLetters, setGuessedLetters]=useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordtoGuess.includes(letter))

  return (
    <>
      <div className='main-container'>

        <div className='lose-win'>Hangman</div>
        <HangmanDrawing numberofGuess={incorrectLetters.length}/>
        <HangmanWord guessedLetters={guessedLetters} wordtoGuess = {wordtoGuess}/>
        <div className='second-container'>
          <Keyboard setGuessedLetters = {setGuessedLetters} guessedLetters={guessedLetters}/>
        </div>
        
      </div>
    </>
  )
}

export default App
