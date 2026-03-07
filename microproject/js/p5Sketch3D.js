function setup() {
  createCanvas(1200, 400, WEBGL);
}

function draw() {
  background(200);
  let moveSpeed = 0;
  
  moveSpeed = 0.5 * frameCount;

  drawHexagon3D(moveSpeed);

}

function drawHexagon(cx, cy, cz, r) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    vertex(cx + cos(angle) * r, cy + sin(angle) * r, cz);
  }
  endShape(CLOSE);
}


function drawHexagon3D(s) {
  rotateX(3.5);
  rotateY(4);
  
  let radius = 50;
  let h = 25; // Height of the prism
  
  // Create a 3D Hexagonal Prism
  stroke(0);
  fill(100, 150, 250);
  
  // Top and Bottom faces
  drawHexagon(s, 0, -h/2, radius);
  drawHexagon(s, 0, h/2, radius);
  
  // Connecting sides
  beginShape(QUAD_STRIP);
  for (let i = 0; i <= 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    vertex(x+s, y, -h/2);
    vertex(x+s, y, h/2);
  }
  endShape(CLOSE);
}