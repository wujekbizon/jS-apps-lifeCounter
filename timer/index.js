//  select  different elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// create instance of the timer and pass those elements
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
