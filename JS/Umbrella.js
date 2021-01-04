class Umbrella
{
    constructor(Xpos,Ypos)
    {
        this.x = Xpos;
        this.y = Ypos;

        this.body = Bodies.circle(this.x,this.y,100/2);

        this.boy = loadImage("images/Walking Frame/walking_1.png");
    }

    display()
    {
        imageMode(CENTER);
        image(this.boy,this.x,this.y,100,100);
    }
}