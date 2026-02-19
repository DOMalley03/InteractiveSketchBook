//variables
let steps = 0;
let maxSteps = 8;

function setup(){

    createCanvas(600, 600);
   
}



function draw() {
    background(0);

    let sectionHeight = height / maxSteps;

    //sections
    noStroke();
    fill('#FA8072');
    for (let i=0; i<steps; i++){
        rect(0, i * sectionHeight, width, sectionHeight);
        
    }

    if (steps >= maxSteps) {
        textSize(30);
        fill(100);
        text("Thank You <3", width -375, height -300)
    } else {
        textSize(30);
        fill(95);
        text("Click Me", width -375, height -300);
    }

}

function mousePressed() {
    
    if (steps < maxSteps){
        steps += 1;
    }
}


