const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  backgroundImage, ground, superhero,block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8 ,block9 ,block10 ,block11 ,block12 ,block13 ,block14; 


function preload() {
  backgroundImage = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1000, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 380, 600, 5);

  superhero = new Superhero (50,360,90,80);
  attach = new Throw(superhero.body, { x: 100, y: 305 });
 

  block1 = new Block(280, 350, 40, 40);
  block2 = new Block(310, 350, 40, 40);
  block3 = new Block(340, 350, 40, 40);
  block4 = new Block(370, 350, 40, 40);
  block5 = new Block(400, 350, 40, 40);
  block6 = new Block(430, 350, 40, 40);
  block7=  new Block(460, 350, 40, 40);
  block8 = new Block(490, 350, 40, 40);
  block9 = new Block(310, 315, 40, 40);
  block10 = new Block(340, 315, 40, 40);
  block11 = new Block(370, 315, 40, 40);
  block12 = new Block(400, 315, 40, 40);
  block13 = new Block(430, 315, 40, 40);
  block14 = new Block(460, 315, 40, 40);

  block15 = new Block(320, 300, 40, 40);
  block16 = new Block(360, 300, 40, 40);
  block17 = new Block(390, 300, 40, 40);
  block18 = new Block(420, 300, 40, 40);
  block19 = new Block(450, 300, 40, 40);
  block20 = new Block(340, 315, 40, 40);
  block21 = new Block(340, 350, 40, 40);
  block22 = new Block(370, 350, 40, 40);
  block23 = new Block(400, 350, 40, 40);
  block24 = new Block(430, 350, 40, 40);
  monster = new Monster(600,300,100,100);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImage);
 
  superhero.display();
  ground.display();
 stroke(15);
 fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
}
function mouseDragged(){
Matter.Body.setPosition(superhero.body,{x: mouseX, y: mouseY});
}
/*function mouseReleased(){
  attach.fly();
}
*/
function mouseReleased(){
  attach.release();
}

function keyPressed(){
  if(keyCode === 32){
   attach(ball.body);
  }

 
}