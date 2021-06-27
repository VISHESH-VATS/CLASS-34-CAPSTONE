const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box , ground , Chain



function setup(){
createCanvas(900,900)
engine = Engine.create();
world = engine.world;
Engine.run(engine);

ground = new Ground(1,800,3000,25);
box1 = new Box(450,190,70,70);
box2 = new Box(450,185,70,70);
box3 = new Box(450,160,70,70);
box4 = new Box(450,155,70,70);
box5 = new Box(450,180,70,70);
box6 = new Box(450,175,70,70);
box7 = new Box(450,150,70,70);
box8 = new Box(600,145,70,70);
box9 = new Box(600,140,70,70);
box10 = new Box(600,135,70,70);
box11 = new Box(600,130,70,70);
box12 = new Box(750,125,70,70);
box13 = new Box(750,120,70,70);
box14 = new Box(750,150,70,70);
box15 = new Box(750,150,70,70);
chain = new Chain(200,140,70,70);
}


function draw(){
    background(56,44,44);

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
chain.display();

}