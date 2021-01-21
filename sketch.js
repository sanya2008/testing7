
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lines1
var lines2
var lines3
var paperobject
var ground1

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	lines2=new lines(400,700,20,20)
	

	

	paperobject=new paper(200,180,50)
	paperobject.shapeColor="purple"

	ground1=new ground(350,650,800,10)
	ground1.shapeColor="yellow"
	
}


function draw() {
  rectMode(CENTER);
  background("black");

  lines2.display();
 
  paperobject.display();
  ground1.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85});
	
	 }
   }



