let accumulationControl = 1;
let mousePressedCount = 0;
let circleSize = 60;

function setup() {
  createCanvas(600, 400);      
  background(100,150,200);
}

function draw() {
   
if (accumulationControl == 1) {
  background(100,150,200)
} else {
  circleSize = 100;
}

ellipse(mouseX,mouseY,circleSize);

}


function mousePressed() {
  mousePressedCount++;
  accumulationControl = mousePressedCount%2;
}