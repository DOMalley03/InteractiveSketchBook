let table;
let words = [];
let currentWord;

function preload(){
 table=loadTable("data/classList.csv","csv", "header");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(200);
  textAlign(CENTER, CENTER);

  for(let i=0; i<table.getRowCount(); i++){
    words.push(table.getString(i, 0));
  }
  currentWord = words[0];
}

function draw(){
  background(0);
  fill(255);

  text(currentWord, width/2, height/2)

  console.log(words);
}

function keyPressed(){
  currentWord=words[floor(random(words.length))];
  
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}