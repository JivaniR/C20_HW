var bath;
var brush;
var drink;
var eat;
var gym;
var move;
var iss,bg;
var sleep;
var astronount;

function preLoad (){

  iss= loadImage("iss.png");
  bath=loadAnimation("bath1.png","bath2.png");
  brush= loadAnimation("brush.png");
  drink= loadAnimation("drink1.png","drink2.png");
  eat= loadAnimation("eat1.png","eat2.png");
  gym= loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  move= loadAnimation("move.png","move1.png");
  sleep= loadAnimation("sleep.png");

}


function setup() {
  createCanvas(800,400);
  bg= createSprite(200,200,800,400);
  bg.addImage("abc",iss)
 astronount= createSprite(300,230);
 astronount.addAnimation("sleeping",sleep)
 astronount.scale= 0.1

 createEDdgesSprites();

}

function draw() {
  background(255,255,255);  

  astronount.bounceOff(edges)

  if(keyDown("UP_ARROW")){

    astronount.addAnimation("brushing",brush)
    astronount.changeAnimation("brushing")
    astronount.y= 350
    astronount.velocityX= 0
    astronount.velocityY= 0
  }

  if(keyDown("BOTTOM_ARROW")){

    astronount.addAnimation("gymming",gym)
    astronount.changeAnimation("gyming")
    astronount.y= 350
    astronount.velocityX= 0
    astronount.velocityY= 0
  }

  if(keyDown("LEFT_ARROW")){

    astronount.addAnimation("bathing",bath)
    astronount.changeAnimation("bathing")
    astronount.y= 350
    astronount.velocityX= 0
    astronount.velocityY= 0
  }

  if(keyDown("RIGHT_ARROW")){

    astronount.addAnimation("eating",eat)
    astronount.changeAnimation("eating")
    astronount.y= 350
    astronount.velocityX= 0
    astronount.velocityY= 0
  }

  if(keyDown("m")){

    astronount.addAnimation("moving",move)
    astronount.changeAnimation("moving")
    astronount.y= 350
    astronount.velocityX= -1
    astronount.velocityY= 1
  }
  drawSprites();
}