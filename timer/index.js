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
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  };
  // define getter and setter methods to extract durationInput value of thick method
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

//  select three different elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// create instance of the timer and pass three elements
const timer = new Timer(durationInput, startButton, pauseButton);
