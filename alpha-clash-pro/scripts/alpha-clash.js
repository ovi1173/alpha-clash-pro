
//step-1: hide the home screen to hide the screen ad
// step-2: show the playground
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// const playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');

function continueGame() {
  // step-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  //show it
  console.log('Your random alphabet',alphabet);
  const currentAlphabetElement = document.getElementById('current-alphabet') 
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);

}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}