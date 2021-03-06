class Paper {
    constructor(x, y) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density:1.2,
            isStatic:false,
            
        }
        this.r = 35;
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x, y,this.r,options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       
        noStroke();
        fill("white");
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        imageMode(CENTER)
        image(this.image,0,0,113,113);
        pop();
    }

};