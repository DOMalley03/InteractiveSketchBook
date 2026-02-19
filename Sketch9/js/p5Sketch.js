
let images = [];
let currentIndex = 0;
let lastInput = 0;
let noInput = 5000;

function preload(){
  //img = loadImage("/Sketch8/img/image1.jpeg");

  images[0] = loadImage("../img/image1.jpeg");
  images[1] = loadImage("../img/image2.jpeg");
  images[2] = loadImage("../img/image3.jpeg");
  images[3] = loadImage("../img/image4.jpeg");
  images[4] = loadImage("../img/image5.jpeg");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  //textAlign()
  imageMode(CENTER);

  lastInput = millis();

}

function draw(){
  background(0);

  //changes image after 5s
  if (millis() - lastInput > noInput){
    currentIndex++;
    if(currentIndex >= images.length){
      currentIndex = 0; 
      //loops back to first image
    }
    lastInput = millis(); //reset timer to 0
  }

  let img = images[currentIndex]; 
  //image(img, windowWidth/2, windowHeight/2);
  image(img, windowWidth/2, windowHeight/2);

    fill(255);
    textAlign(CENTER, TOP);
    textSize(24);
    text("Image: " + (currentIndex + 1) + "/" + images.length, width/2, 20)

    textSize(16);
    text("Use left and right arrows to navigate", width/2, height-40);


  
}

function keyPressed(){
  lastInput = millis(); //reset timer every input

  if(keyCode === RIGHT_ARROW){
    currentIndex++;

      if(currentIndex >= images.length){
        currentIndex = 0;
      }
  }

if(keyCode === LEFT_ARROW){
    currentIndex--;
      if(currentIndex < 0){
        currentIndex = images.length-1;
      }
  }
  
}