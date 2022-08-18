


//Create namespace for Engine
const Engine = Matter.Engine;
//Create namespace for World
const World = Matter.World;
//Create namespace for Bodies
const Bodies = Matter.Bodies;
//Create namespace for Body
const Body = Matter.Body;


function setup() {
  createCanvas(400,400);
//create the engine
Car = Engine.create();
  //Add world to the engine
  DreamSMP = Car.world;
  

   //Making the ball bounce
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  //Stopping the ground from moving
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
//add to world
World.add(DreamSMP,ground)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(DreamSMP,ball);
  
}


function draw() 
{
  background(51);
  //Updating my engine (Car)
  Engine.update(Car);
  
  //Setting the centers of the shapes to be in the middle instead of the top left of it
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //write a ellipse function to display ball.
  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
  rect(ground.position.x, ground.position.y, 400, 20);
 


  
  
}

