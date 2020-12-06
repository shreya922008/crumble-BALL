const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3, paper,ground;


function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(200,450,20);
	ground=new Ground(width/2,640,width,20);
	dustbin1=new Dustbin(1200,530,20,200);
	dustbin2=new Dustbin(1000,530,20,200);
	dustbin3=new Dustbin(1100,620,190,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if (keyDown("up")) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

  
	}
} 