const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinko=[];
var div=[];
var ballz=[];

var score=0;
var particle= null;
var turn=0;
var dh=300;
var gameState="play";
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,height,800,20);
//d1=new Div(200,200,10,10);
   
}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var k=0; k<=width;k=k+80){
    div.push(new Div(k,height-dh/2,10,dh))
    textSize(20);


text("500",110,600);
text("500",30,600);
text("500",190,600);
text("500",270,600);

text("100",350,600);
text("100",430,600);
text("100",510,600);

text("200",590,600);
text("200",670,600);
text("200",750,600);

text("Score:"+score,20,50);
text(mouseX+","+mouseY,mouseX,mouseY);


  }

  if(particle!==null){
    particle.display();

    
if(particle.body.position.y>760){

if(particle.body.position.x<300){
  score=score+500;
  particle=null;
}

if(particle.body.position.x>600){
  score=score+200;
  particle=null;
}

if(particle.body.position.x>301 && particle.body.position.x<599 ){
  score=score+100;
  particle=null;
}




}


  }

    if(turn==5 && gameState=="play"){
      gameState="end";

    }
    





  for(var k=0; k<div.length-1;k++){
    // var q=createSprite(k,height-dh/2,10,dh);
    div[k].display();
    
  }
   for(var j=40;j<=width;j=j+50){
    ballz.push(new D(j,75,10))
   }
   for(var j=15;j<=width;j=j+50){
    ballz.push(new D(j,175,10))

   }
  
   for(var j=40;j<=width;j=j+50){
    ballz.push(new D(j,275,10))   }

   for(var j=40;j<=width;j=j+50){
    ballz.push(new D(j,375,10))   }

   for(i=0;i<plinko.length;i++){
     plinko[i].display();
   }

   for(q=0;q<ballz.length;q++){
    ballz[q].display();
  }
  if(gameState=="end"){
    textSize(80);
  text("GAME OVER",160,300);
}
   mousePressed();
ground.display();
//d1.display();

  drawSprites();
}

function mousePressed(){
if(gameState==="play"){
  turn=turn+1;
  particle=new P(mouseX,10,10,10);

}
}

