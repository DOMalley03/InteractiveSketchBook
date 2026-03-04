let points=0;
let mult = 1;
let upgradeCost= 20;

//combo variables
let comboTimer = 0;

function preload(){

}
function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
   
}

function draw() {
 background(100);

    //Circle
    fill('red');
    circle(width / 2, height / 2, 250);

    //Press Me
    fill('white');
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Press Me', 300, 200);

    //Score
    fill('white');
    textSize(18);
    textAlign(LEFT, TOP);
    text('Score: ' + points, 10, 10);
    text('Multiplier: ' + mult + 'x', 10, 30);

    //upgrade
    fill(50, 200, 50);
    rect(400, 300, 170, 60, 10);

    fill('white');
    textAlign(CENTER,CENTER);
    textSize(18);
    text('Upgrade Cost: ' + upgradeCost, 485, 330);

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
    let d= dist(mouseX, mouseY, width/2, height/2);

    if (d<125){
        points += mult;

        //resets countdown on combo
        if (mult >= 3){
            comboTimer = 5;
        }
        //add sound?
        
    }

    //if mouse clicks on upgrade
    if(mouseX > 400 && mouseX <570 && mouseY >300 && mouseY <360) {
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

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}