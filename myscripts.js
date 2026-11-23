"use strict";

const leftEye = document.getElementById("eleft");
const rightEye = document.getElementById("eright");

const colorButton = document.querySelector('.color');
const flashButton = document.querySelector('.flash');

let colorInterval;  // store the interval ID
let isFlashing = false; // track flash state
let color1 = "#961f1f";
let color2 = "#eef2e7ff";

// Function to flash eyes
function flashEyes() {
  const ceil = Math.ceil(Math.random() * 2);

  if (ceil === 1) {
    leftEye.style.backgroundColor = color1;
    rightEye.style.backgroundColor = color2;
  } 
  else {
    rightEye.style.backgroundColor = color1;
    leftEye.style.backgroundColor = color2;
 }
}

// Color button click → pick new colors and start flashing
colorButton.addEventListener('click', () => {
  // Pick new random colors
  color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  // Start flashing if not already flashing
  if (!isFlashing) {
    colorInterval = setInterval(flashEyes, 250);
    isFlashing = true;
  }
});

// Flash button click → toggle flashing ON/OFF
flashButton.addEventListener('click', () => {
  if (isFlashing) {
    clearInterval(colorInterval); // stop flashing
    isFlashing = false;
    // reset eyes to default color
    leftEye.style.backgroundColor = "#ffffff";
    rightEye.style.backgroundColor = "#ffffff";
  } else {
    // restart flashing with current colors
    colorInterval = setInterval(flashEyes, 250);
    isFlashing = true;
  }
});