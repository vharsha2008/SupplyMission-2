var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	ball=createSprite(400,200,40,40);
	

	wall1=createSprite(320,620,10,100);
	wall2=createSprite(470,620,10,100);
	wall3=createSprite(390,655,150,10);



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  wall1.shapeColor="red";
  wall2.shapeColor="red";
  wall3.shapeColor="red";
	  
  ball.shapeColor="whirte";

  if (keyDown("down")) 
  {
	  ball.velocityY=5;
  }

  if (ball.isTouching(groundSprite)) {
	
	ball.collide(wall3);	
  }



}