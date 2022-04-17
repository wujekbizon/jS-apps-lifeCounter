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
      this.onStart(this.timeRemaining);
    }
    this.thick();
    // if old interval is stiil runing clear it
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(this.thick, 20);
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
      this.timeRemaining = this.timeRemaining - 0.02;
      // check if onThick callback
      if (this.onThick) {
        this.onThick(this.timeRemaining);
      }
    }
  };
  // define getter and setter methods to extract durationInput value of thick method
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    return (this.durationInput.value = time.toFixed(2));
  }
  // add audio on complete
  play = () => {
    const audio = new Audio(
      // early version of feature
      'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
    );
    audio.play();
  };
}
