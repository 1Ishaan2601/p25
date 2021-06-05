class Paper {
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0.4,
            density:0.35,
           restitution:0.7,
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.image=loadImage("paper.png")

        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r,);
        pop ()
    }
} 