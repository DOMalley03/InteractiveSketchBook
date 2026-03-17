let shapeSize = 250;
let points=0;
let mult = 1;
let upgradeCost= 10;
let circleX, circleY;

//combo variables
let comboTimer = 0;

function preload(){

}
function setup(){
    let canvasHeight = min(windowHeight, 750);
    createCanvas(windowWidth, canvasHeight);

    //center circle
    circleX = width/2;
    circleY = height/2;
}

function windowResized(){
    let canvasHeight = min(windowHeight, 750);
  resizeCanvas(windowWidth, canvasHeight);
}

function draw() {
 background(50);

    if (mouseIsPressed) {
    shapeSize = 225;     
  } else {
    shapeSize = 250; 
  }

    //Circle
    fill('red');
    circle(circleX, circleY, shapeSize);

    //Press Me
    fill('white');
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Press Me', circleX, circleY);

    //Score
    fill('white');
    textSize(18);
    textAlign(LEFT, TOP);
    text('Score: ' + points, 10, 10);
    text('Multiplier: ' + mult + 'x', 10, 30);

    //upgrade
    fill(50, 200, 50);
    let upgradeX = width -200;
    let upgradeY = height -80;
    rect(upgradeX, upgradeY, 170, 60, 10);

    fill('white');
    textAlign(CENTER,CENTER);
    textSize(18);
    text('Upgrade Cost: ' + upgradeCost, upgradeX + 85, upgradeY + 30);

    //combo timer
    if (mult >= 3){
        comboTimer -= deltaTime /1000;
        fill('yellow');
        textAlign(LEFT, TOP);
        text('Timer: ' + comboTimer.toFixed(1), 10, 50);
        
        if (comboTimer <= 0){
            mult = 1;
            points = max(0, points - 10);
        }
    }
}

function mousePressed(){
    //distance between mouse and center of circle
    let d= dist(mouseX, mouseY, circleX, circleY);

    if (d < shapeSize/2){
        points += mult;

        //resets countdown on combo
        if (mult >= 3){
            comboTimer = 5;
        }
        // move circle to a random spot after 5
        if (mult >= 5) {
        circleX = random(shapeSize / 2, width - shapeSize / 2);
        circleY = random(shapeSize / 2, height - shapeSize / 2);
        }
        
        //add sound?
    }

    //if mouse clicks on upgrade
    let upgradeX = width -200;
    let upgradeY = height -80;

    if(mouseX > upgradeX && mouseX < upgradeX + 170 
        && mouseY > upgradeY && mouseY < upgradeY + 60) {
            if (points >= upgradeCost){
                points -= upgradeCost;
                mult++;
                upgradeCost = floor(upgradeCost * 1.5);

                //starts timer
                if (mult >= 3){
                    comboTimer = 5;
                }
            }

        }

}
