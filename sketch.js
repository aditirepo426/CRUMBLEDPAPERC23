var ball ;
var rect1 ,rect2,rect3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1535, 750);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(767.5,650,1535,10);
	rect1 = new Ground (1100,575,20,100);
	rect2 = new Ground(1300,575,20,100);
	rect3 = new Ground(1200,635,200,20);
	paperObject = new Paper(500,600,40);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();
	rect1.display();
	rect2.display();
	rect3.display();
	paperObject.display();

  	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x: 85,y: -85})

	}
}



