const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const boxes = document.querySelectorAll('.box');

let currentScore = 0;
let timeLeftValue = 60;

let currentMolePosition = '';

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

addClickListeners();
randomMole();
const moleInterval = setInterval(randomMole, 700);

const timeLeftInterval = setInterval(() => {
  timeLeftValue--;
  console.log(timeLeftValue);
  if (timeLeftValue === 0) {
    alert(`Game Over!!!\nYou have hit ${currentScore} moles in 60 seconds.`);
    window.location.reload();
  }
  timeLeft.textContent = timeLeftValue;
}, 1000);
