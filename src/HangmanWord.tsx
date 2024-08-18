import { useEffect } from 'react'
import './assets/css/Hangman.css'

type HangmanWordProps = {
    guessedLetters: string[]
    wordtoGuess: string
}

export function HangmanWord({ guessedLetters, wordtoGuess }: HangmanWordProps) {

    useEffect(() => {
        function checkWin(guessedLetters: string[], wordToGuess: string) {
            const wordLetters = [...new Set(wordToGuess.split(''))];
            const win = wordLetters.every(letter => guessedLetters.includes(letter));
            if (win) {
                setTimeout(() => {
                    const restart = window.confirm('You win. Do you want to restart?');
                    if (restart) {
                        window.location.reload();
                    }
                }, 500);
            }
        }

        checkWin(guessedLetters, wordtoGuess);
    }, [guessedLetters, wordtoGuess]); // Runs after each render when guessedLetters or wordtoGuess changes

    return (
        <div className='word-guess'>
            {wordtoGuess.split("").map((letter, index) => (
                <span className='span-guess' key={index}>
                    <span className={guessedLetters.includes(letter) ? 'show-letter' : 'hide-letter'}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}