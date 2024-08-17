import './assets/css/Hangman.css'

type HangmanDrawingProps={
    numberofGuess:number

}

const elements = [
    <div className='bar bottom'/>,
    <div className='bar vertical'/>,
    <div className='bar upper'/>,
    <div className='bar smallup'/>,
    <div className='hangman-head'/>,
    <div className='hangman-body'/>,
    <div className='hangman-r-arm'/>,
    <div className='hangman-l-arm'/>,
    <div className='hangman-r-leg'/>,
    <div className='hangman-l-leg'/>
  ];

function endGame(){
    const restart = window.confirm('You Lose. Do you want to restart?');
    if (restart) {
        window.location.reload(); // Refreshes the page
    }
}
export function HangmanDrawing({numberofGuess}:HangmanDrawingProps){
    const elementsToRender = elements.slice(0, numberofGuess)
    const hasLeftLeg = elementsToRender.some(element => element.props.className === 'hangman-l-leg')
    
    if (hasLeftLeg) {
        endGame();
    }
    return (
        <div className='main-drawing'>
            {elementsToRender}
        </div>
    )
}