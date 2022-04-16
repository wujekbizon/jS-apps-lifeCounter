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
let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started');
  },
  onThick() {
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset = currentOffset - 50;
  },
  onComplete() {
    console.log('Timer is completed');
  },
});
