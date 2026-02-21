let myImages = [];
let currentIndex = 0;
let pictureIndicator = 1;

function preload() {

  myImages[0]=loadImage("sketch9/img/Flower.jpg");
  myImages[1]=loadImage("sketch9/img/Bio-Design.jpg");
  myImages[2]=loadImage("sketch9/img/Farol.jpg");
  myImages[3]=loadImage("sketch9/img/Herbs.jpg");
  myImages[4]=loadImage("sketch9/img/flower2.jpg");
}


function setup(){
createCanvas(600,600);
textSize(16);
}



function draw() {
  background(200);

  //pictureIndicator = currentIndex+1;
  pictureIndicator = pictureNumber(currentIndex);
  text("Picture " + pictureIndicator + " of 5", 20, 20);

  let myImg = myImages[currentIndex];
  image(myImg,0,30);
}



  function keyPressed(){
    if (keyCode ===RIGHT_ARROW){
      if (currentIndex<4) {
            currentIndex++;
      } else {
      currentIndex=0;
      }
    } else if (keyCode === LEFT_ARROW) {
      if (currentIndex>0) {
            currentIndex--;
      } else {
      currentIndex=4;
      }
    }
    
  } 


function pictureNumber(x) {
    let result = x+1;
    return result;
}

