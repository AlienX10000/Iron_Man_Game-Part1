var ironMan, ironManImg, drone, droneImg;

function preload() {
  ironManImg = loadImage("images/iron-man-flying.png");

  droneImg = loadImage("images/AIM drone.png");
}

function setup() {
  createCanvas(displayWidth, 700);

  ironMan = createSprite(132,350,10,10);
  ironMan.addImage("fly" ,ironManImg);
  ironMan.scale=0.5;

  drone = createSprite(1100,350,20,20);
  drone.addImage("enemy" ,droneImg);
  drone.scale=0.7;
}

function draw() {
  background(75)

  // camera.position.y = 300;

  movement();

  drawSprites();
}

function movement() {
  if (keyDown("up")) {
    ironMan.velocityY = -10;
  }
  if (keyDown("down")) {
    ironMan.velocityY = +10;
  }
  if (keyDown("left")) {
    ironMan.velocityX = -10;
  }
  if (keyDown("right")) {
    ironMan.velocityX = +10;
  }

  if (keyWentUp("up")) {
    ironMan.velocityY = 0;
  }
  if (keyWentUp("down")) {
    ironMan.velocityY = 0;
  }
  if (keyWentUp("left")) {
    ironMan.velocityX = 0;
  }
  if (keyWentUp("right")) {
    ironMan.velocityX = 0;
  }
}