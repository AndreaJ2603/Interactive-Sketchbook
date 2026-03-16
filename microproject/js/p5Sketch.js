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
let gameDuration = 60;
let isRed = false;
let beginTime;
let timeIsUp = false;
let timeLeft = 60;
let isStarted = false;
let flowerSize = 50; // Initial size




function setup() {
  createCanvas(1200, 600);   
  textSize(50); 
  beginTime = millis();
  startTime = millis();  

  myFillColor = color(100, 150, 200);
  angleMode(DEGREES);

  flowerSize = 50;
}

function draw() {

  background(200);

  stroke(255); // White stroke
  strokeWeight(2);

  fill('green');

  if (!isStarted) {
    textFont("sans-serif");
    text("Collect 10 points by Clicking when Red.", 150, height/2);
    text("(Press any key to start.)", 300, height/2+60);
  } else {
    textFont("impact");
    text("Points: " + myPoints,50,60);
    text("Time Left: " + timeLeft, 850,60);


    if (!timeIsUp) {
      let elapsedTotalTime = int((millis() - beginTime) / 1000);
      let remainingTime = gameDuration - elapsedTotalTime;
      timeLeft = remainingTime;

      if (remainingTime <= 0) {
        remainingTime = 0;
        timeIsUp = true;
      }
  
    

      fill(myFillColor);

      //let currentTime = millis();  
      let elapsedTime = millis() - startTime;
      let timeToSwitch = random(1000, 3000);
      let timeToSwitchBack = 200;

      if (elapsedTime >= timeToSwitch && elapsedTime < timeToSwitch+timeToSwitchBack) {
        bigRed();
      } else if (elapsedTime >= timeToSwitch+timeToSwitchBack) {
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

    } else {
      if (myPoints <10) {
        textFont("sans-serif");
        text("Nope, press any key to try again.", 250, height/2+60);
      } else {
        drawFlower(width / 2, height / 2, 200, 10, color(255, 100, 150));

      }
    }

  }

  


}


function mousePressed() {
  if (isRed) {
    myPoints++;
  }
  //startMoving = true;
  //shapeSize = 120;
  // myFillColor = color(255, 0, 0); // red fill
  //startTime = millis();

  //mousePressedCount++;
  //changeShape = mousePressedCount%2;
}

function keyPressed() {
  if (!isStarted) {
    isStarted = true;
    beginTime = millis();
  }
  

  if (timeIsUp) {
    beginTime = millis();
    myPoints = 0;
    timeIsUp = false;
  }
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
  isRed = false;
}


function bigRed(){
  shapeSize = 120;
  myFillColor = color(255, 0, 0); // red fill  
  isRed = true;
}


function drawFlower(flowerX, flowerY, size, petals, c) {
  push(); // Saves the current drawing state
  translate(flowerX, flowerY); // Moves the origin (0,0) to the flower's center

  scale(flowerSize / 50); 

  // Draw the petals using a loop and rotation
  fill(c); // Set the petal color
  noStroke(); // Remove outlines
  for (let i = 0; i < petals; i++) {
    ellipse(0, size / 2, size / 4, size); // Draws an ellipse (petal) away from the origin
    rotate(360 / petals); // Rotates the canvas for the next petal
  }

  // Draw the center of the flower
  fill(255, 204, 0); // Set yellow color for the center
  circle(0, 0, size / 2); // Draw the central circle

  flowerSize += 0.5;
  if (flowerSize > 300) {
    flowerSize = 50;
  }
  pop(); // Restores the original drawing state
}

