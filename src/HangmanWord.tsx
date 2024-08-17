import './assets/css/Hangman.css'

type HangmanWordProps = {
    guessedLetters: string[]
    wordtoGuess: string
}

export function HangmanWord({guessedLetters, wordtoGuess}:HangmanWordProps){

    function checkWin(guessedLetters: string[], wordToGuess: string) {
        const wordLetters = [...new Set(wordToGuess.split(''))];
        const win = wordLetters.every(letter => guessedLetters.includes(letter));
        if (win) {
            const restart = window.confirm('You win. Do you want to restart?');
            if (restart) {
                window.location.reload();
            }
        }
    }

    // Call checkWin once, before rendering
    checkWin(guessedLetters, wordtoGuess);

    
    return (
        <div className='word-guess'>
            {wordtoGuess.split("").map((letter,index)=>(
                <span className='span-guess' key={index}>
                    <span className={guessedLetters.includes(letter) ? 'show-letter' : 'hide-letter'}>
                    {letter}
                    </span>
                </span>
            ))}

        </div>
    )
}