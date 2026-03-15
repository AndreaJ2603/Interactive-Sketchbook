let changeForms = 1;
//let mousePressedCount = 0;
let shapeSize = 80;
let startTime;
let startTimeRed;
//let startMoving = false;
let angle = 0;
let hexX = 80;
let myFillColor;
//let reverseDirection = false;
let myPoints = 0;
let timeLeft = 60;



function setup() {
  createCanvas(1200, 600);   
  textSize(50); 
  startTime = millis();  

  myFillColor = color(100, 150, 200);
  angleMode(DEGREES);
}

function draw() {

  background(200);
  fill('green');
  text("Points: " + myPoints,50,60);
  text("Time Left: " + timeLeft, 850,60);

  fill(myFillColor);
  stroke(255); // White stroke
  strokeWeight(2);

  let currentTime = millis();
  let elapsedTime = millis() - startTime;

  if (elapsedTime >= 1000 && elapsedTime < 1200) {
    bigRed();
  } else if (elapsedTime >= 1200) {
    smallBlue();
    startTime = millis();
  }


  let moveSpeed = 0;
  
  //if (startMoving) {
      //moveSpeed = 0.005 * frameCount;
      moveSpeed = moveSpeed + 2;
  //}
  
  /*if (hexX > 700 ) {
    reverseDirection = true;
  } 
  
  if (hexX < 0) {
    reverseDirection = false;
  }
  
  if (reverseDirection) {
    hexX = hexX - moveSpeed;  
  } else {
    hexX = hexX + moveSpeed;
  }*/

  hexX = hexX + moveSpeed;
  if (hexX > width ) {
    hexX = 0;
  }
  


  let hexY = height / 2;
  let radius = shapeSize
  
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
  //startMoving = true;
  //shapeSize = 120;
  // myFillColor = color(255, 0, 0); // red fill
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

function smallBlue(){
  shapeSize = 80;
  myFillColor = color(100, 150, 200);
}


function bigRed(){
  shapeSize = 120;
  myFillColor = color(255, 0, 0); // red fill  
}