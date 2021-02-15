class Rope {
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.01

        }

        this.rope = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.rope)

    }
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        strokeWeight(9)
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y)



    }
}