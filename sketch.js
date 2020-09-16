var box1,box2,box3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

Matter.Bodies.circle(670,780,2,options,20);


function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

	box1=createSprite(400,650,200,20);
	box1.shapeColor="red";

	box2=createSprite(300,610,20,100);
	box2.shapeColor="red";

	box3=createSprite(500,610,20,100);
	box3.shapeColor="red";

	ball=new Ball(250,200);

	ground=new Ground(400,height,800,20);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();

  drawSprites();

 
}



