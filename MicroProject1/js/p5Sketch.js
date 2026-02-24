let points=0;
let mult = 1;
function setup(){
    createCanvas(600, 400);
    
    
}
function draw() {
    background(100);

    //circle
    fill('red');
    circle(width / 2, height / 2, 250);

    fill('white');
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Press Me', 300, 200);

    fill('white');
    textSize(30);
    textAlign(LEFT, TOP);
    text('Score: ' + points, 0, 0);

}

function mousePressed(){
    points += mult;
}