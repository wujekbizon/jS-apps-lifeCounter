//  select  different elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('#circle');

// set cirlce attributes
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

// create instance of the timer and pass those elements
// add callbacks as fourth argument
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onThick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      // offset calculation
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  // work in progress..
  onComplete() {
    this.play();
  },
});
