function setup(){
    createCanvas(600, 400);
    
}
function draw() {
    background(255, 204, 0);

    let leftWall = 200;
    let rightWall= 400;
    line(leftWall, 0, leftWall, 400);
    line(rightWall, 0, rightWall, 400);

    //constraint
    let x= constrain(mouseX, leftWall, rightWall);
    ellipse(x,200, 75, 75);

}