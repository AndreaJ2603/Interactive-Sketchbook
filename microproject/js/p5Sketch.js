let changeForms = 1;
//let mousePressedCount = 0;

function setup() {
  createCanvas(800, 600);      
}

function draw() {

  background(200);

  fill(100, 150, 200); // Light blue fill
  stroke(255); // White stroke
  strokeWeight(2);

  hexagon(width / 2, height / 2, 80);
   
/*if (changeShape == 1) {
  ellipse(mouseX,mouseY,60);
} else {
  square(mouseX, mouseY, 100);
}*/


}


function mousePressed() {
  //mousePressedCount++;
  //changeShape = mousePressedCount%2;
}



function hexagon(cX, cY, r) {
  beginShape();

  for (let a = 0; a < TWO_PI; a += TWO_PI / 6) {
    let x = cX + r * cos(a);
    let y = cY + r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE); 
}