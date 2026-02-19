//variables
let steps = 0;
let maxSteps = 8;

function setup(){

    createCanvas(600, 600);
   
}



function draw() {
    background(220);

    let sectionHeight = height / maxSteps;

    //sections
    noStroke();
    fill('#D6EAF0')
    for (let i=0; i<steps; i++){
        rect(0, i * sectionHeight, width, sectionHeight);
    }

    if (steps >= maxSteps) {
        textSize(16);
        fill(0);
        for (var y=0; y<= height; y+=40){
            for (var x=0; x<=width; x+= 40) {
                fill (255, 140);
                ellipse(x,y,40,40);
            }
        }

    }

}

function mousePressed() {
    if (steps < maxSteps){
        steps += 1;
    }
}

