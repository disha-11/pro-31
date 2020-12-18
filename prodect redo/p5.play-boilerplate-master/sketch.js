const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;

var particle=[];
var plinko=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,720);
  engine = Engine.create();
  world = engine.world;

for (let i = 0; i <= 480; i += 80) {
    divisions.push(new Division(i, height - divisionHeight / 4, 10, divisionHeight));
  }

  for(var j=40; j<=480;j+=50){
    plinko.push(new Plinko(j,75) )
  }
  for(var j=15; j<=480-10;j+=50){
    plinko.push(new Plinko(j,175) )
  }
  for(var j=40; j<=480;j+=50){
    plinko.push(new Plinko(j,75) )
  }
  for(var j=15; j<=480-10;j+=50){
    plinko.push(new Plinko(j,175) )
  }
  ground=new Ground(240,715,480,20)
}

 
function draw() {
  background(0,0,0); 
  
  for (let i = 0; i < particle.length; i++) {
    particle[i].display();
  }

  if (frameCount % 90 == 0 || frameCount % 60 == 0) {
    particle.push(new Particle(random(20, 480 - 20), 10, 10));
  }

 for(var j=0; j<plinko.length;j++){
  plinko[j].display();
}

for(var j=0; j<divisions.length;j++){
  divisions[j].display();
}

ground.display();
}

