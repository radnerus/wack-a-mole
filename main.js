const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const startButton = document.querySelector('#start-button');
const boxes = document.querySelectorAll('.box');

let currentScore = 0;
let timeLeftValue = 60;

let currentMolePosition = '';

startButton.addEventListener('click', startGame);

function randomMole() {
  boxes.forEach((box) => box.classList.remove('mole'));
  const randomBox = boxes[Math.floor(Math.random() * boxes.length)];
  if (currentMolePosition === randomBox.id) {
    return randomMole();
  }
  currentMolePosition = randomBox.id;
  console.log(currentMolePosition);
  randomBox.classList.add('mole');
}

function addClickListeners() {
  boxes.forEach((box) =>
    box.addEventListener('click', (e) => {
      if (e.target.id === currentMolePosition) {
        currentScore++;
        score.textContent = currentScore;
      }
    })
  );
}

function startGame() {
  startButton.style.display = 'none';
  addClickListeners();
  randomMole();
  setInterval(randomMole, 700);

  setInterval(() => {
    timeLeftValue--;
    console.log(timeLeftValue);
    if (timeLeftValue === 0) {
      alert(`Game Over!!!\nYou have hit ${currentScore} moles in 60 seconds.`);
      window.location.reload();
    }
    timeLeft.textContent = timeLeftValue;
  }, 1000);
}
