
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var  circle;
var ground;	
var world,sling;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
ground=new Ground(500,500,300,30);
ground2=new Ground(800,400,300,30);

World.add(world, ground);

box1=new Box(420,470,40,60);
box2=new Box(460,470,40,60);
box3=new Box(500,470,40,60);
box4=new Box(540,470,40,60);
box5=new Box(580,470,40,60);

box6=new Box(440,410,40,60);
box7=new Box(480,410,40,60);
box8=new Box(520,410,40,60);
box9=new Box(560,410,40,60);

box10=new Box(460,350,40,60);
box11=new Box(500,350,40,60);
box12=new Box(540,350,40,60);

box13=new Box(480,289,40,60);
box14=new Box(520,289,40,60);

box15=new Box(500,209,40,60);



bbox1=new Box(740,360,40,60);
bbox2=new Box(760,360,40,60);
bbox3=new Box(800,360,40,60);
bbox4=new Box(840,360,40,60);
bbox5=new Box(880,360,40,60);

bbox6=new Box(760,300,40,60);
bbox7=new Box(780,300,40,60);
bbox8=new Box(820,300,40,60);
bbox9=new Box(860,300,40,60);

bbox10=new Box(780,250,40,60);
bbox11=new Box(800,250,40,60);
bbox12=new Box(840,250,40,60);

bbox13=new Box(800,200,40,60);
bbox14=new Box(820,200,40,60);

bbox15=new Box(810,150,40,60);



circle=new Circle(100,200,50)

		
sling =new SlingShot (circle.body,{x:130,y:200})
	

Engine.run(engine);
	
  
}


function draw() {
	background(221,255,187);
Engine.update(engine);

  circle.display();
  
  sling.display();

  fill("blue");
  box1.display();
  fill("red");
  box2.display();
  fill("pink");
  box3.display();
  fill("orange");
  box4.display();
  fill("yellow");
  box5.display();

  fill("red");
  box6.display();
  fill("pink");
  box7.display();
  fill("orange");
  box8.display();
  fill("yellow");
  box9.display();

  fill("pink");
  box10.display();
  fill("orange");
  box11.display();
  fill("yellow");
  box12.display();

  fill("orange");
  box13.display();
  fill("yellow");
  box14.display();

  fill("yellow");
  box15.display();



  fill("yellow");
  bbox1.display();
  fill("orange");
  bbox2.display();
  fill("pink");
  bbox3.display();
  fill("red");
  bbox4.display();
  fill("blue");
  bbox5.display();

 
  fill("yellow");
  bbox6.display();
  fill("orange");
  bbox7.display();
  fill("pink");
  bbox8.display();
  fill("red");
  bbox9.display();

  fill("yellow");;
  bbox10.display();
  fill("orange");
  bbox11.display();
  fill("pink");;
  bbox12.display();
  
  fill("yellow");
  bbox13.display();
  fill("orange");
  bbox14.display();

  fill("yellow");
  bbox15.display();





 
  fill(89, 206, 121)
  ground.display();
  ground2.display();
  

  sling.display();
  fill("white")

  drawSprites();

 
}

function keyPressed() {


  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(circle,circle.position,{x:55,y:-75});
    
  	}


	
	else if (keyCode === LEFT_ARROW) {
  
		boxleftSprite.x=boxleftSprite.x-20;  
		boxrightSprite.x=boxrightSprite.x-20;
		boxBase.x=boxBase.x-20;
	  translation={x:-20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)
	  
   
 	} else if (keyCode === RIGHT_ARROW) {
		boxleftSprite.x=boxleftSprite.x+20;  
		boxrightSprite.x=boxrightSprite.x+20;
		boxBase.x=boxBase.x+20;
		translation={x:20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)
	}
  }
	 
   
  function mouseDragged(){
	Matter.Body.setPosition(circle.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	sling.fly();
	
  }

