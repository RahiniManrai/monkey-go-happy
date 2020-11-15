
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var score=0;
var gameState=PLAY;
var PLAY;
var END;
var SurvivalTime=0;
var ground;
var monkey=createSprite(100, 500);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale=0.3;
  
  var ground=createSprite(300, 510, 1200, 10);
  
  

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
}


function draw() {
  
  background("white");
    text("Score: "+ score, 500,50);

 
  if(gameState=PLAY){
    
    spawnObstacle();
    spawnBanana();
    
    if(keyDown("space")){
      
      monkey.velocityY=-3
      
    }
    monkey.velocityY = monkey.velocityY + 0.8
    
    if(monkey.isTouching(obstacle)){
      
      gameState=END;
    }
    if(monkey.isTouching(banana)){
      
      score=score+1;
    }
    if(ground.width/2){
      
      ground.x=300;
      ground.velocityX=-4;
    }
    
    stroke("black")
    fill("white")
    SurvivalTime=Math.ceil(frameCount/frameRate());
    text("Survival Time", +SurvivalTime, 100, 50);
    
  }
  if(gameState=END){
    
    score=0;
    obstacle.destroy();
    banana.destroy();
    monkey.destroy();
    
  }
  
  monkey.collide(ground);
  
  drawSprites();
}

function spawnObstacle(){
  if (frameCount % 150 === 0) {
    var obstacle=createSprite(400, 500)
  obstacle.addImage("obstacleImage", obstacleImage);
  obstacle.scale=0.5;
    obstacle.velocityX=-4;
       
  }
    
}



function spawnBanana(){
  if (frameCount % 90 === 0) {
   var banana=createSprite(200, Math.round(random(120, 200)))
  banana.addImage("bananaImage",  bananaImage);
  banana.scale=0.5;
    banana.velocityX=-4;
    banana.lifetime=400;
  
   
  }
    
}






