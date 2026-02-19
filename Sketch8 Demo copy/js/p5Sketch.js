
let images = [];
let currentIndex = 0;

function preload(){
  //img = loadImage("/Sketch8/img/image1.jpeg");

  images[0] = loadImage("/Sketch8 Demo/img/image1.jpeg");
  images[1] = loadImage("/Sketch8 Demo/img/image2.jpeg");
  images[2] = loadImage("/Sketch8 Demo/img/image3.jpeg");
  images[3] = loadImage("/Sketch8 Demo/img/image4.jpeg");
  images[4] = loadImage("/Sketch8 Demo/img/image5.jpeg");

}

function setup(){
  createCanvas(600,600);
  textSize(16);
  //textAlign()

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
  
}