var tower,towerImage
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup;
var ghost,ghostImage;
var invisibleBlock,invisibleBlockGroup
var PLAY = 1;
var END = 0;
var gameState = PLAY

function preload(){
  
towerImage = loadImage("tower.png");
doorImage = loadImage("door.png");
climberImage = loadImage("climber.png");
ghostImage = loadImage("ghost-standing.png");
}

function setup(){
createCanvas(600,600);
  
tower = createSprite(300,300,50,50);
tower.addImage("tower",towerImage);
tower.velocityY = 3

ghost = createSprite(200,200,50,50);
ghost.addImage("ghost",ghostImage);
ghost.scale = 0.4

doorGroup = new Group();
climberGroup = new Group();
invisibleBlockGroup = new Group();
  
}

function draw(){
  background("white");
  
  if(gameState === PLAY){
     if(tower.y>600) {
     tower.y = 300    
  
  }
  
  if(keyDown("space")){
     ghost.velocityY = -10

     }
  
  if(keyDown("RIGHT_ARROW")){
    ghost.x = ghost.x +5   
    
  }
  
  if(ghost.isTouching(climberGroup)){
    ghost.velocityY = 0
    
  }
  
  if(keyDown("LEFT_ARROW")){
    ghost.x = ghost.x - 5   
    
  }
  
  if(ghost.isTouching(invisibleBlockGroup)){
    ghost.destroy();
    gameState=END
    }
ghost.velocityY = ghost.velocityY + 0.5
  
  
  spawnDoors();
    
  }
 
  else if(gameState === END) {
  text("game Over",200,200);
          
          }
  drawSprites();
  
}

function spawnDoors() {
  if(frameCount%250 === 0){
  door = createSprite(200,50,20,40);
  door.addImage("door",doorImage);
  door.velocityY = 1
  door.x = Math.round(random(10,300))
  door.lifetime = 800;
  doorGroup.add(door);
    
  //creating climber
    
  climber = createSprite(300,50,20,40);
  climber.addImage("climber",climberImage);
  climber.velocityY = 1
  climber.x = door.x
  climber.y = climber.y + 70
  climber.lifetime = 800;
  climberGroup.add(climber);
    
    //creating invisibleBlock
    
  invisibleBlock = createSprite(200,300,50,10);
  invisibleBlock.velocityY = 1;
  invisibleBlock.x = climber.x;
  invisibleBlock.y = climber.y;
  invisibleBlock.visible = false;
  invisibleBlock.lifetime = 800
  invisibleBlockGroup.add(invisibleBlock)
}
   
  
}






