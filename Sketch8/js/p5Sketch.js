
let images = [];
let currentIndex = 0;

function preload(){
  //img = loadImage("/Sketch/img/image1.jpeg");

  images[0] = loadImage("/Sketch8/img/buster1.jpg");
  images[1] = loadImage("/Sketch8/img/buster2.jpg");
  images[2] = loadImage("/Sketch8/img/dave1.jpg");
  images[3] = loadImage("/Sketch8/img/daveandbuster.jpg");
  images[4] = loadImage("/Sketch8/img/buster3.jpg");

}

function setup(){
  createCanvas(displayWidth, displayHeight);
  textSize(16);
  //img.resize (600, 600) not sure how to use yet
}

function draw(){
  background(0);

  let img = images[currentIndex]; 
  image(img, 0, 0);
}

function keyPressed(){
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

  if(keyCode === UP_ARROW){
    currentIndex = 0;
  }

  if (keyCode === DOWN_ARROW){
    currentIndex = images.length -1;
    
  }

}