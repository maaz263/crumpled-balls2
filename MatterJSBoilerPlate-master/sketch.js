
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinobject
var paperobject
var ground
var canvas
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
paperobject=new paper(200,450,40);
dustbinobject=new dustbin(1200,650);
var options={
isStatic:true

}
ground=Bodies.rectangle(800,690,1600,20,options);

World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  rect(ground.position.x,ground.position.y,1600,20);
  drawSprites();
  paperobject.display();
  dustbinobject.display();
 
}
function keypressed (){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}
}



