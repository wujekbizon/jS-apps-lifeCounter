// create class Timer
class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
  }
  // define a method called start
  start = () => {
    console.log('Time to start the timer!');
  };
}

//  select three different elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// create instance of the timer and pass three elements
const timer = new Timer(durationInput, startButton, pauseButton);
