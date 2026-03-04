
let offset = 0;
let offsetY = 0;

let startTime;
let timeLimit = 10000;

let timerStarted = false;
let level = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  //how to measure rectangle measures 0, 0
  rectMode(CENTER);
  //measures placement from center of shape

  startTime = millis();
}

function draw(){
  background(0);

  //level rule
  if (level === 1){
    timeLimit = 10000;
  }

  if (level === 2){
    timeLimit = 5000;
  }

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

  let squareX = width * 2/3 + offset;
  if (level === 1 && squareX > width -50){
    level = 2;

    //reset square
    offset = 0;
    offsetY = 0;

    //pause timer until press
    timerStarted = false;
  }

  //level 2
  if (level === 2 && squareX > width -50){
    
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

  offset += random(-50, 150);
  offsetY += random (-50, 150);



}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}