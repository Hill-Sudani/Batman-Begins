const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var umbrella;
var thunderCreatedFrame,thunder;
var thunder1,thunder2,thunder3,thunder4;
var maxdrops = 100;
var drops = [];

function preload()
{
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup()
{
    engine = Engine.create();
    world = engine.world;

    createCanvas(1280,720);

    umbrella = new Umbrella(640,600);

    if(frameCount%80 === 0)
    {
        for(i = 0;i<maxdrops;i++)
        {
            drops.push(new Drop(random(0,1000),random(0,700)));
        }
    }   
}

function draw()
{
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1,4));

    if(frameCount%80 === 0)
    {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);

        switch(rand)
        {
            case 1 : thunder.addImage(thunder1);
            break;

            case 2 : thunder.addImage(thunder2);
            break;

            case 3 : thunder.addImage(thunder3);
            break;

            case 4 : thunder.addImage(thunder4);
            break;

            default : break;
        }

        thunder.scale = random(0.3,0.6);
    }

    if(thunderCreatedFrame + 10 === frameCount && thunder)
    {
        thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; i < maxdrops; i++)
    {
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   

