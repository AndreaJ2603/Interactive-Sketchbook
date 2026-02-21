function setup() {
  createCanvas(600, 400);      
  
}

function draw() {
   background(100,400,250 );



// Constraint
let x = constrain(mouseX, 200,400);
let y = constrain(mouseY, 100,300); 
rect(x,y,50,50)


}