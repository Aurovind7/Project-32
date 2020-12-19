const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var ground;
var polygon, slingshot;
var score=0
var backgroundImg


function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,600,20);
    platform = new Ground(600, height-20, 600, 170);

    block1=new Block(300,275,30,40)
    block2=new Block(330,275,30,40)
    block3=new Block(360,275,30,40)
    block4=new Block(390,275,30,40)
    block5=new Block(420,275,30,40)
    block6=new Block(450,275,30,40)
    block8=new Block(480,235,30,40)
    block9=new Block(360,235,30,40)
    block10=new Block(390,235,30,40)
    block11=new Block(420,235,30,40)
    block12=new Block(450,235,30,40)
    block13=new Block(360,195,30,40)
    block14=new Block(390,195,30,40)
    block15=new Block(420,195,30,40)
    block16=new Block(450,195,30,40)

    polygon = new Polygon(200,200);

    //log6 = new Log(230,180,80, PI/2);
    rope = new Rope(polygon.body,{x:200, y:200});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35)
    fill("white")
    text("Score : " + score, 750, 40)

    Engine.update(engine);
    //strokeWeight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    ground.display();
    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    polygon.display();
    
    //log6.display();
    rope.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    rope.fly(polygon);
    //gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
    polygon.trajectory=[]   
    Matter.Body.setPosition(polygon.body,{x:200,y:200})
    rope.attach(polygon.body);
    }
}

async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json()
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13)
    if(hour>=06 && hour<=19){
        bg="bg2.jpg"
    }
    else{
        bg="bg1.jpg"
    }
backgroundImg=loadImage(bg);
console.log(backgroundImg);
}