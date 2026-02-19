let plantHeight = 20;
let energy = 50;  
let growthCooldown = 0; 

function setup() {
  createCanvas(400, 600);
  textAlign(CENTER);
}

function draw() {
  background(220);

  //"plant"
  fill(34, 139, 34);
  rect(width / 2 - 10, height - plantHeight, 20, plantHeight);

  //adds energy to the counter
  if (energy < 50) {
    energy += 0.1;
  }

  // cooldown for the cooldown
  if (growthCooldown > 0) {
    growthCooldown -= 1;
  }

  //Text
  fill(0);
  textSize(18);
  //displays rounded numbers
  text("Plant Height: " + floor(plantHeight), width/2, 30);
  text("Solar Power: " + floor(energy), width/2, 50);

    //prompt 
  if (growthCooldown > 0) {
    text("Wait", width/2, height/2);
  } else {
    text("Spend 10 Sun?", width/2, height/2);
  }
}


function mousePressed() {
    //checks for energy higher than 10 and cooldown is done
  if (energy > 10 && growthCooldown <= 0) {

    let growthAmount = random(5, 25);
    plantHeight += growthAmount;

    //how much energy to grow
    energy -= 15;          

    //cooldown
    growthCooldown = 30;  

// if not enough energy punishes by hindering growth
  } else {
    plantHeight -= 5; 
  }
}