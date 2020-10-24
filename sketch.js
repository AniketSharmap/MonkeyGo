

var survivaltime = 0;
var monkey, monkey_running
var banana, bananaImage, obstacle, obstaclesImage
var score;
var ground;
var invisibleGround
function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");

}




function setup() {
  createCanvas(400, 400)

  score = 0;


  monkey = createSprite(30, 336, 20, 20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1;

  ground = createSprite(400, 380, 900, 10)
  ground.velocityX = -3;

  console.log(ground.x);





}


function draw() {
  background("aqua");


  stroke("white");
  textSize(20);
  fill("Black")
  text("Score :" + score, 300, 50)

  stroke("black");
  textSize(20);
  fill("yellow")
  survivaltime = Math.ceil(frameCount / frameRate())
  text("SURVIVAL TIME :" + survivaltime, 200, 100)


  if (keyDown("space") && monkey.y >= 160) {
    monkey.velocityY = -10;
  }

  monkey.velocityY = monkey.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);


  bananas();
  obs();
  drawSprites();
}

function obs() {
  if (World.frameCount % 80 === 0) {
    obstacle = createSprite(400, 358, 20, 20)
    obstacle.addImage(obstaclesImage)
    obstacle.velocityX = -3;
    obstacle.scale = 0.1;
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1
  }
}

function bananas() {
  if (World.frameCount % 120 === 0) {
    banana = createSprite(400, 350, 20, 20)
    banana.addImage(bananaImage)
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.y = Math.round(random(150, 300))
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}