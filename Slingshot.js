class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,20);
        image(this.image2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            if(pointA.x<=pointB.x)
            {
            strokeWeight(4);
            stroke(84, 39, 15);
            line(pointA.x-25, pointA.y, pointB.x-15, pointB.y+5);
            line(pointA.x-25, pointA.y, pointB.x+25, pointB.y);
            image(this.image3,pointA.x-25,pointA.y-5,10,20)
            }else{
                strokeWeight(4);
                stroke(84, 39, 15);
                line(pointA.x+25, pointA.y+5, pointB.x-15, pointB.y+5);
                line(pointA.x+25, pointA.y+5, pointB.x+25, pointB.y);
                image(this.image3,pointA.x+25,pointA.y-5,10,20) 
            }
        }
    }
    
}