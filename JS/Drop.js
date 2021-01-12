class Drop
{
    constructor(Xpos,Ypos)
    {
        this.x = Xpos;
        this.y = Ypos;
        
        this.body = Bodies.circle(this.x,this.y,5);
        World.add(world,this.body);
    }

    update()
    {
        if(this.body.position.y>720)
        {
            Matter.Body.setPosition(this.body,{x : random(0,1000),y : random(0,700)});
        }
    }

    display()
    {
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,5,5);
    }
}
