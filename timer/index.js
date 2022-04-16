// create class Timer
class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // to say that callbacks are optionals I use if statement
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onThick = callbacks.onThick;
      this.onComplete = callbacks.onComplete;
    }

    // addEventListener for start and pause buttons
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }
  // define start method
  start = () => {
    // check to see if onStart callback
    if (this.onStart) {
      this.onStart();
    }

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
      //when timer is done check if isComplete callback
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      // check if onThick callback
      if (this.onThick) {
        this.onThick();
      }
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
// add callbacks as fourth argument
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started');
  },
  onThick() {
    console.log('Timer just tick down');
  },
  onComplete() {
    console.log('Timer is completed');
  },
});
