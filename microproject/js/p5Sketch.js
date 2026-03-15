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




function setup() {
  createCanvas(1200, 600);   
  textSize(50); 
  beginTime = millis();
  startTime = millis();  

  myFillColor = color(100, 150, 200);
  angleMode(DEGREES);
}

function draw() {

  background(200);

  stroke(255); // White stroke
  strokeWeight(2);

  fill('green');

  if (!isStarted) {
    text("Collect 10 points by clicking when Red.", width/2, height/2);
    text("(Press any key to start.)", width/2, height/2+60);
  } else {
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
  isStarted = true;
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