let x1 = 50;
let x2 = 100; 
let speed = 0.05;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  
  x1 += speed * frameCount/2;
  x2 += speed * frameCount/10;
  
  fill('red'); ellipse(x1, 100, 20);
  if (x1<=x2) {
      fill('white'); ellipse(x2, 130, 20);

  } else {
      fill('blue'); ellipse(x2, 130, 20);

  }
}