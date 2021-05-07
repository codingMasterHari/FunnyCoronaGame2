class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.launcherObject = Constraint.create(options);
        World.add(world, this.launcherObject);
    }
  
    fly(){
        this.launcherObject.bodyA = null;
    }

    attach(body) {
        this.launcherObject.bodyA = body;
    }
  
   display(){
        if(this.launcherObject.bodyA){
            var pointA = this.launcherObject.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        strokeWeight(4);
        stroke("black");
    }
}