function setup(){
    createCanvas(600, 400);
    
}
function draw() {
    background(135, 206, 235);
    fill(mouseX)
    circle(mouseX, mouseY, 200);
    ellipse(300, 400, 600, 70);
    
}