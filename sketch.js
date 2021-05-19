const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var world,engine; 

var ball;
var ground;

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

var ground_options = {
  isStatic: true
}

 ground = Bodies.rectangle(400, 380, 800, 20, ground_options);
 World.add(world, ground);

 var ball_options = {
   restitution: 0.8
 }

 
 ball = Bodies.circle(400, 100, 60, ball_options );

 World.add(world,ball);
//console.log(ground);

}

function draw() {
  background("white"); 
  Engine.update(engine);

  rectMode(CENTER);
  fill("red");
  rect(ground.position.x, ground.position.y, 800, 20);


  ellipseMode(RADIUS);
  fill("purple");
  ellipse(ball.position.x,ball.position.y, 60, 60);
}