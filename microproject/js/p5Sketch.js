function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);

  drawHexagon3D();

}

function drawHexagon(cx, cy, cz, r) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    vertex(cx + cos(angle) * r, cy + sin(angle) * r, cz);
  }
  endShape(CLOSE);
}


function drawHexagon3D() {
  rotateX(3.5);
  rotateY(4);
  
  let radius = 100;
  let h = 50; // Height of the prism
  
  // Create a 3D Hexagonal Prism
  stroke(0);
  fill(100, 150, 250);
  
  // Top and Bottom faces
  drawHexagon(0, 0, -h/2, radius);
  drawHexagon(0, 0, h/2, radius);
  
  // Connecting sides
  beginShape(QUAD_STRIP);
  for (let i = 0; i <= 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    vertex(x, y, -h/2);
    vertex(x, y, h/2);
  }
  endShape(CLOSE);
}