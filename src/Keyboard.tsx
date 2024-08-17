import './assets/css/Hangman.css'


export function Keyboard({ setGuessedLetters, guessedLetters }: { setGuessedLetters: (letters: string[]) => void, guessedLetters: string[] }){
    const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function handleKey(key: string){
        setGuessedLetters([...guessedLetters,key])
    }
    return (
        <div className='keyboard'>
            {KEYS.map(key=>{
                return<button 
                onClick = {() => handleKey(key)} 
                className={`keyboard-btn ${guessedLetters.includes(key) ? 'inactive' : ''}`}  
                key={key}
                disabled={guessedLetters.includes(key)}>
                    {key}
                </button>
            })}

        </div>
    )
    
}