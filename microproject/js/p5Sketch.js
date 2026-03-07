let changeForms = 1;
//let mousePressedCount = 0;
let shapeSize = 80;
let startTime;

function setup() {
  createCanvas(800, 600);      
}

function draw() {

  background(200);

  fill(100, 150, 200); // Light blue fill
  stroke(255); // White stroke
  strokeWeight(2);

  let currentTime = millis();

  if (currentTime - startTime >= 5000) {
    shapeSize = 80;
  }

  let moveSpeed = 0;
  
  moveSpeed = 0.5 * frameCount;


  hexagon(80, height / 2, shapeSize, moveSpeed);
   
/*if (changeShape == 1) {
  ellipse(mouseX,mouseY,60);
} else {
  square(mouseX, mouseY, 100);
}*/


}


function mousePressed() {
  shapeSize = 40;
  startTime = millis();
  //mousePressedCount++;
  //changeShape = mousePressedCount%2;
}



function hexagon(cX, cY, r, s) {
  beginShape();

  for (let a = 0; a < TWO_PI; a += TWO_PI / 6) {
    let x = cX + r * cos(a);
    let y = cY + r * sin(a);
    vertex(x+s, y);
  }
  endShape(CLOSE); 
}