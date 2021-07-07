var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redg, blueg, greeng, pinkg, arrowg;
var score = 0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redg = new Group();
  blueg = new Group();
  greeng = new Group();
  pinkg = new Group();
  arrowg = new Group();
  

}

function draw() {
 background(0);
    if(arrowg.isTouching(redg)){
      arrowg.destroyEach();
      redg.destroyEach();
      score += 2;
    }
    else if(arrowg.isTouching(greeng)){
      arrowg.destroyEach();
      greeng.destroyEach();
      score += 1;
    }
    else if(arrowg.isTouching(blueg)){
      arrowg.destroyEach();
      blueg.destroyEach();
      score += 2;
    }
    else if(arrowg.isTouching(pinkg)){
      arrowg.destroyEach();
      pinkg.destroyEach();
      score += 2;
    }
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if(select_balloon == 2){
      blueBalloon();
  
    }
    else if(select_balloon == 3){
      greenBalloon();
    }
    else if(select_balloon == 4){
      pinkBalloon();
    }
  }
  
  drawSprites();
 text("Score: "+score,50,50);

}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowg.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redg.add(red)
  
}

function blueBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(blue_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  blueg.add(red)
}

function greenBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(green_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  greeng.add(red)
}
function pinkBalloon() { 
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(pink_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 1.0;
  pinkg.add(red)
}
