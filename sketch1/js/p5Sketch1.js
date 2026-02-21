function setup() {
  createCanvas(600, 400);      
}

function draw() {
background(255,0,0);

//direct manipulation
fill(0,255,0);
noStroke();
ellipse(mouseX,mouseY,60);

// Constraint
//let x = constrain(mouseX, 100,500); 
//rect(x,200,50,50)


}