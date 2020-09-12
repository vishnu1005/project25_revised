const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var dropzone1,dropzone2,dropzone3;
var dustbinimage;

function preload()
{
	
	dustbinimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1500, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	paperball= new Paper(100,100,40);
	//paperball.shapeColor=color=("white");

	

	ground = new Ground(600,height,1950,20)

	dropzone1 = createSprite(715,685,10,100/2);
	dropzone2 = createSprite(810,685,10,100/2);
	dropzone3=createSprite(767,625,100,10);
	dropzone3.addImage(dustbinimage);
	dropzone3.scale=0.5;

	

}


function draw() {
  rectMode(CENTER);
  background("blue");

  //if (paperball.isTouching(dropzone1||dropzone2||dropzone3))
 // {
//	 isStatic:true
  //}

paperball.display();
ground.display();


 // keypressed();
  drawSprites();
 
}

function keyPressed()
	{
	   if(keyCode===UP_ARROW)
	   {
		   Matter.Body.applyForce(paperball.body,paperball.body.position,{x:65,y:-65})
	   }
	}


