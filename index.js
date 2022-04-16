const p1 = {
  life: 20,
  button1: document.querySelector('#p1Btn1'),
  button2: document.querySelector('#p1Btn2'),
  display: document.querySelector('#p1Display'),
  input: document.querySelector('#p1Input'),
  name: document.querySelector('#p1Name'),
};

const p2 = {
  life: 20,
  button1: document.querySelector('#p2Btn1'),
  button2: document.querySelector('#p2Btn2'),
  display: document.querySelector('#p2Display'),
  input: document.querySelector('#p2Input'),
  name: document.querySelector('#p2Name'),
};

p1.input.addEventListener('input', function () {
  p1.name.textContent = p1.input.value;
  p1.input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      p1.input.value = '';
    }
  });
});

p1.input.addEventListener('focusin', (event) => {
  event.target.classList.add('has-background-link-light');
});

p2.input.addEventListener('focusin', (event) => {
  event.target.classList.add('has-background-primary-light');
});

p1.input.addEventListener('focusout', (event) => {
  event.target.classList.remove('has-background-link-light');
  p1.input.value = '';
});

p2.input.addEventListener('focusout', (event) => {
  event.target.classList.remove('has-background-primary-light');
  p2.input.value = '';
});

p2.input.addEventListener('input', function () {
  p2.name.textContent = p2.input.value;
  p2.input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      p2.input.value = '';
    }
  });
});

const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');
let isGameOver = false;
let loseAllLife = 0;

function updateLife(player, opponent) {
  if (!isGameOver) {
    player.life--;
    if (player.life === loseAllLife) {
      player.display.classList.add('has-text-danger-dark');
      opponent.display.classList.add('has-text-success-dark');
      isGameOver = true;
      player.button1.disabled = true;
      player.button2.disabled = true;
      opponent.button1.disabled = true;
      opponent.button2.disabled = true;
    }
    player.display.textContent = player.life;
  }
}

p1.button1.addEventListener('click', function () {
  p1.life++;
  p1.display.textContent = p1.life;
});

p1.button2.addEventListener('click', function () {
  updateLife(p1, p2);
});

p2.button1.addEventListener('click', function () {
  p2.life++;
  p2.display.textContent = p2.life;
});

p2.button2.addEventListener('click', function () {
  updateLife(p2, p1);
});

playTo.addEventListener('change', function () {
  p1.display.textContent = this.value;
  p2.display.textContent = this.value;
  p1.life = this.value;
  p2.life = this.value;
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.life = 20;
    p.display.textContent = 20;
    p.button1.disabled = false;
    p.button2.disabled = false;
    p.display.classList.remove('has-text-success-dark', 'has-text-danger-dark');
    playTo.value = 20;
  }
  p1.name.textContent = 'Player 1';
  p2.name.textContent = 'Player 2';
}
