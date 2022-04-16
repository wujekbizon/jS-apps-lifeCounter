// create class Timer
class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // addEventListener for start and pause buttons
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }
  // define start method
  start = () => {
    this.thick();
    this.intervalId = setInterval(this.thick, 1000);
  };
  // define pause method
  pause = () => {
    clearInterval(this.intervalId);
  };
  // define tick method
  thick = () => {
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;
  };
}

//  select three different elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// create instance of the timer and pass three elements
const timer = new Timer(durationInput, startButton, pauseButton);
