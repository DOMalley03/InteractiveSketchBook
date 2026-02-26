
let offset = 0;
let offsetY = 0;

let startTime;
let timeLimit = 10000;

let timerStarted = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  //how to measure rectangle measures 0, 0
  rectMode(CENTER);
  //measures placement from center of shape

  startTime = millis();
}

function draw(){
  background(0);

  let elapsed = millis() - startTime;
  let remaining = floor((timeLimit - elapsed) / 1000);

  textSize(32);
  fill(255);
  text("Time: " + remaining, width/2, 50);

  //resets counter when time is above the limit
  if (elapsed>timeLimit){
    offset = 0;
    offsetY = 0;
    startTime = millis();
  }

  //moving rect
  push();
  translate(offset, offsetY);
  fill(100, 200, 100);
  rect(width * 2/3, height/2, 100, 100);
  pop();

  //non moving rect
  rect(width/3, height/2, 100, 100);
}

function keyPressed(){
  if (!timerStarted){
    startTime = millis();
    timerStarted = true;
  }

  offset += random(-100, 100);
  offsetY += random (-75, 75);



}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}