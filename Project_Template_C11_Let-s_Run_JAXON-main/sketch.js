var path, pathImage;
var power, powerImage;
var runner, runnerImg;



function preload(){
  //pre-load images
pathImage = loadImage("path.png")
powerImage = loadImage("power.png")
runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  
path = createSprite(200,200);
path.addImage(pathImage)
path.velocityY = 4;
path.scale = 1.2;

runner = createSprite(200,200,5,5);
runner.addAnimation("runner_running", runnerImg);
runner.scale = 0.08;

right_boundary = createSprite(370,200,30,400);
left_boundary = createSprite(30,200,30,400);
right_boundary.visible = false;
left_boundary.visible = false;


}

function draw() {
 
if(path.y > 400 ){
  path.y = height/2;
}

runner.x = World.mouseX

createEdgeSprites();
runner.bounceOff(right_boundary);
runner.bounceOff(left_boundary);



drawSprites();
}
