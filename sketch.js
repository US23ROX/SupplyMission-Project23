var helicopterImage, helicopter, package,packageImage;
var groundLeft, groundRight, groundBottom; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterImage=loadImage("helicopter.png")
	packageImage=loadImage("package.png")
}

function setup(){
	createCanvas(600, 600);
	rectMode(CENTER);
	

	package=createSprite(60, 200, 10,10);
	package.addImage(packageImage);
	package.scale=0.2;
	package.visible = false;

	helicopter=createSprite(60, 200, 10,10);
	helicopter.addImage(helicopterImage);
	helicopter.scale=0.6;
    
	groundLeft=createSprite(300, 550, 30,100, {isStatic: true});
	groundLeft.shapeColor="red";

	groundRight=createSprite(500, 550, 30,100, {isStatic: true});
	groundRight.shapeColor="red";

	groundBottom=createSprite(400, 585, 200,30, {isStatic: true});
	groundBottom.shapeColor="red";

    engine = Engine.create();
	world = engine.world;
	World.add(world,package);
	World.add(world,helicopter);
	World.add(world,groundRight);
	World.add(world,groundLeft);
	World.add(world,groundBottom);
}

function draw(){
	background("black");

	Engine.update(engine);

    if (keyDown("left")){
		helicopter.x = helicopter.x - 6;
	}

    if (keyDown("right")){
		helicopter.x = helicopter.x + 6;
	}

    if (keyDown("down")){
		package.visible = true;
		package.x = helicopter.x
		package.velocityY = 6;
	}
	
	package.collide(groundBottom);
	package.collide(groundLeft);
	package.collide(groundRight);

	drawSprites();
}