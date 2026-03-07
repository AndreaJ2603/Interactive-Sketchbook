let changeForms = 1;
//let mousePressedCount = 0;
let shapeSize = 80;
let startTime;
//let startMoving = false;
let angle = 0;
let hexX = 80;


function setup() {
  createCanvas(1200, 600);     
  angleMode(DEGREES);
}

function draw() {

  background(200);

  fill(100, 150, 200); // Light blue fill
  stroke(255); // White stroke
  strokeWeight(2);

  //let currentTime = millis();

  //if (currentTime - startTime >= 5000) {
  //  shapeSize = 80;
  //}

  let moveSpeed = 0;
  
  //if (startMoving) {
      moveSpeed = 0.005 * frameCount;
  //}
  hexX = hexX+ moveSpeed;
  let hexY = height / 2;
  let radius = shapeSize;
  
  push(); 
  translate(hexX, hexY); 
  rotate(angle);

  drawHexagon(radius);
  
  pop();
  
  angle += 1;
   
/*if (changeShape == 1) {
  ellipse(mouseX,mouseY,60);
} else {
  square(mouseX, mouseY, 100);
}*/


}


function mousePressed() {
  startMoving = true;
  //shapeSize = 40;
  //startTime = millis();

  //mousePressedCount++;
  //changeShape = mousePressedCount%2;
}



function drawHexagon(radius) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let theta = i * 60; // 360 / 6 sides
    let x = radius * cos(theta);
    let y = radius * sin(theta);
    vertex(x, y);
  }
  endShape(CLOSE);
}