
//step-1: hide the home screen to hide the screen ad
// step-2: show the playground
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');

function handleKeyBoardUpEvent(event) { // callback func
    const playerPressed = event.key;
    //get the expected to press

    // stop the game if player pressed 'Esc'
    if(playerPressed === 'Escape'){
         gameOver();
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //check match or not
    if (playerPressed === expectedAlphabet) {

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);
        //------------------------
        // // update score:
        // //1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
       
        // //2.increase the score by 1
        

        // //3.show the updated score
        // currentScoreElement.innerText = newScore;
        //----------------------

         removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);
        if(updatedLife === 0){
            gameOver();
        }

        
    }

}
//capture keyboard key press
document.addEventListener('keyup', handleKeyBoardUpEvent)

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    //show it
    console.log('Your random alphabet', alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);

}
function play() {
    //hide everything only show playground
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');
    // resent score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame();
}

function gameOver(){
   hideElementById('play-ground');
   showElementById('final-score');
   //update final score
   //1.Get the final score
   const lastScore = getTextElementValueById('current-score');
   setTextElementValueById('game-end-score',lastScore);

   // clear the last selected alphabet
   const currentAlphabet = getElementTextById('current-alphabet');
   removeBackgroundColorById(currentAlphabet);

}