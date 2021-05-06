class Paper{
    constructor(){
        var options ={
            
            restitution :0.3,
            friction :1,
            density :1.2,
            isStatic : false,
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(100,480,20,options);
        this.radius =20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        fill("white");
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}