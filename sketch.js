
var ground,box
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);
	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = new Ground(width/2, height-35, width,10)

	box = new Box(870,650,200,20)

	box1 = new Line(760,555,20,228)

	box2 = new Line(960,555,20,228)
		
	paperObject = new Paper(50,450)

	launcher = new Launcher(paperObject.body,{x:100,y:450})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  box.display()
  box1.display()
  box2.display()
  ground.display()
  paperObject.display()
  launcher.display()
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}


    
	






