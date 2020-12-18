class Plinko{
    constructor(x,y){
        var opt={
            isStatic:true
        }
        push ();
        this.body=Bodies.circle(x,y,10,opt);
        World.add(world,this.body);
        pop ();
    }
    display(){
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,10,10);
    }
}