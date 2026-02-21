let changeShape = 1;
let mousePressedCount = 0;

function setup() {
  createCanvas(600, 400);      
}

function draw() {

  background(120,150,180);
   
if (changeShape == 1) {
  ellipse(mouseX,mouseY,60);
} else {
  square(mouseX, mouseY, 100);
}


}


function mousePressed() {
  mousePressedCount++;
  changeShape = mousePressedCount%2;
}