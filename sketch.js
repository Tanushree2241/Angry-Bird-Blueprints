const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine , myWorld , box1 , box2 , ground1;


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
   myEngine = Engine.create();
   myWorld = myEngine.world;
   box1 = new box (200,200,50,50);
   box2 = new box (225,150,50,100);
  ground1 = new ground (200,390,400,20)
  
}

function draw() {
  background("black"); 
  box1.display();
  ground1.display();
 box2.display();
  Engine.update(myEngine);
  //drawSprites();
}