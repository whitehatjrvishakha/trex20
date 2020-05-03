const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;


var box1;
var box2;
var b3;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

     var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);//ground
   

     box1=new Box(168,166,30,30);
   box2=new Box(288,156,80,30);
   b3=new Box(30,89,100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    //to start the eng
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    box1.display();
    b3.display()
    box2.display()
}