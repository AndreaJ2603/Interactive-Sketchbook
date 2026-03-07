let accumulationControl = 1;
let mousePressedCount = 0;

function setup() {
  createCanvas(600, 400);      
  background(100,150,200);
}

function draw() {
   
if (accumulationControl == 1) {
  background(100,150,200)
}

ellipse(mouseX,mouseY,60);
pentagon( 30,16,80,25.60);
}


function mousePressed() {
  mousePressedCount++;
  accumulationControl = mousePressedCount%2;
}