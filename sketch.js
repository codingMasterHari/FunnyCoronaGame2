const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const bgSound = new Audio("bgSoundproject28.wav");

var treeObj, coronaObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12, ambulance1, bg;
var world,boy;

//Declare launcherObject and launchForce variable here
var launcherObject;

function preload(){
	boy=loadImage("images/alien.png");
  ambulanceImg = loadImage("images/ambulance.png");
  bg = loadImage("images/bgforproject28.jpg")
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  

	coronaObj=new Corona(235,420,30); 

	mango1=new People(1100,50,30);
  mango2=new People(1020,300,30);
	mango3=new People(930,200,30);
	mango4=new People(1000,70,30);
	mango5=new People(1100,180,30);
	mango6=new People(1000,180,30);
  ambulance1 = new Ambulance(1050, 710, 50, 50);
	// mango7=new People(900,230,40);
	// mango8=new People(1140,150,40);
	// mango9=new People(1100,230,40);
	// mango10=new People(1200,200,40);
	// mango11=new People(1120,50,40);
	// mango12=new People(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  //create launcherObject here
  launcherObject = new Launcher(coronaObj.body, {x: 235, y:420})


	Engine.run(engine);
}

function draw() {

  // background(230);
  bgSound.play();
  bgSound.loop = true;
  background(bg);
  textSize(25);
  fill("red");
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy, 100, 340, 160, 230);
  
  
  treeObj.display();
  coronaObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  // mango7.display();
  // mango8.display();
  // mango9.display();
  // mango10.display();
  // mango11.display();
  // mango12.display();

  coronaObj.display();
  groundObject.display();
  ambulance1.display();
  // display launcher object here
  launcherObject.display();
  // image(ambulanceImg, 800, 350, 500, 350);
    


  detectollision(coronaObj,mango1);
  detectollision(coronaObj,mango2);
  detectollision(coronaObj,mango3);
  detectollision(coronaObj,mango4);
  detectollision(coronaObj,mango5);
  detectollision(coronaObj,mango6);
  // detectollision(coronaObj,mango7);
  // detectollision(coronaObj,mango8);
  // detectollision(coronaObj,mango9);
  // detectollision(coronaObj,mango10);
  // detectollision(coronaObj,mango11);
  // detectollision(coronaObj,mango12);
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r)
    {
      Matter.Body.setStatic(lmango.body,false);
    }
}

function mouseDragged(){
  Matter.Body.setPosition(coronaObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcherObject.fly();
}

function keyPressed() {
  if (keyCode == 32) {
    Matter.Body.setPosition(coronaObj.body, {x: 235, y: 420});
    launcherObject.attach(coronaObj.body);
  }
}