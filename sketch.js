
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world 

var boxes = [];
var gSlider;
var ground;
 
function setup() {
    createCanvas(400, 400);

    engine=Engine.create()
    world=engine.world
     
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
   var options={
       isStatic:true
   }
   ground=Bodies.rectangle(200,380,400,20,options)
   World.add(world,ground)
}
 
function mousePressed() {
    if (mouseY < 350) {
    boxes.push(new Box(mouseX,mouseY,random(20,60),random(20,60)))
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    for(var i=0;i<boxes.length;i++){
     boxes [i].show()
    }
     rectMode(CENTER)
     rect(ground.position.x,ground.position.y,400,20)
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
      friction:0.5,
      restitution:0.5,
    }
     this.body=Bodies.rectangle(x,y,w,h,options)
    this.x=x;
    this.y=y
    this.w=w
    this.h=h
    World.add(world,this.body)

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
       var pos = this.body.position
       var ang = this. body.angle
       push()
       translate(pos.x,pos.y)
       rotate(ang) 
       rectMode(CENTER)
       rect(0,0,this.w,this.h)
       pop()
    }
}