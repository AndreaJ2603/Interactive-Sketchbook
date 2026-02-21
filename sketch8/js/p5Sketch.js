let myImages = [];
let currentIndex = 0;

function preload() {

  myImages[0]=loadImage("sketch8/img/Flower.jpg");
  myImages[1]=loadImage("sketch8/img/Bio-Design.jpg");
  myImages[2]=loadImage("sketch8/img/Farol.jpg");
  myImages[3]=loadImage("sketch8/img/Herbs.jpg");
  myImages[4]=loadImage("sketch8/img/flower2.jpg");
}


function setup(){
createCanvas(600,600);
textSize(16);
}



function draw() {
  background(0);


  let myImg = myImages[currentIndex];
  image(myImg,0,0);
}


  function keyPressed(){
    if (keyCode ===RIGHT_ARROW){
      if (currentIndex<4) {
            currentIndex++;
      } else {
      currentIndex=0;
      }
    }
      


}
