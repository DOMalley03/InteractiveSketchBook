//variables
let steps = 0;
let maxSteps = 10;

function setup(){

    createCanvas(600, 600);
   
}



function draw() {
    background(10);

    let sectionWidth = width / maxSteps;

    //sections
    noStroke();
    fill('#2CFF05')
    for (let i=0; i<steps; i++){
        rect(0, i * sectionWidth, height, sectionWidth);
    }

    if (steps >= maxSteps) {
        textSize(50);
        fill(95);
        text("Fully Charged", width -450, height -275);
    } else if (steps >= 5){
        textSize(30);
        fill(95);
        text("Half Charged", width -375, height -300);
        text("Plug In Later", width -375, height -270)
    } else {
        textSize(20);
        fill(95);
        text("Not Charged", width -365, height -300);
        text("'Please Click'", width -365, height -270)
    }

}

function mousePressed() {
    if (steps < maxSteps){
        steps += 1;
    }
}

