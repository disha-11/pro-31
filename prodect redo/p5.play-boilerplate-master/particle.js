class Particle{
    constructor(x,y,radius){
       var opt={
    
        isStatic: false,
        restitution: 0.4,
        density: 0.8,
        friction: 1
       }
        push();
        this.body=Bodies.circle(x,y,radius,opt)
        this.radius=radius;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
        pop();
    }
    display(){
        push ();
        fill (this.color);
        translate (this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        ellipseMode(CENTER);
        ellipse (0,0,this.radius,this.radius);
        pop ()
    }
}