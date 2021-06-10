var astronaut,backg;
var bg;
var sleep,brush,gym,eat,drink,move;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym11.png","images/gym12.png","images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png")
}

function setup() {
  createCanvas(600, 500);
   astronaut = createSprite(300,230);
   astronaut.addAnimation("sleeping",sleep);
   astronaut.scale=0.1; 
   
  backg= createSprite(300,250);
  backg.addImage(bg);
  backg.scale=0.15;

  backg.depth = astronaut.depth;
  astronaut.depth =astronaut.depth+1;

 

} 

function draw() {
  background("blue");
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation('brushing',brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
 }

 if(keyDown("DOWN_ARROW")){
   astronaut.addAnimation('gymming',gym);
   astronaut.changeAnimation("gymming");
   astronaut.y=300;
   astronaut.velocityX=0;
    astronaut.velocityY=0;
}

if(keyDown("LEFT_ARROW")){
 astronaut.addAnimation('eating',eat);
 astronaut.changeAnimation("eating");
 astronaut.x=350;
 astronaut.velocityX=0;
    astronaut.velocityY=0;
}

if(keyDown("RIGHT_ARROW")){
 astronaut.addAnimation('bathing',bath);
 astronaut.changeAnimation("bathing");
 astronaut.x=100;
 astronaut.velocityX=0;
    astronaut.velocityY=0;
}

if(keyDown("M")){
 astronaut.velocityY=1;
 astronaut.velocityX=1;
 astronaut.addAnimation("moving",move);
 astronaut.changeAnimation("moving");
 astronaut.x=100;
 astronaut.y=100;

}




 drawSprites();
}


