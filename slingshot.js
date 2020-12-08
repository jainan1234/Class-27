class SlingShot {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA, // variable name : value given by user
            bodyB: bodyB, // variable name : value given by user
            stiffness: 0.001, //how strong the connection is
            length: 30
        }
        
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
    }
    
    display() {
        strokeWeight(4)
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.bodyB.position.x, this.sling.bodyB.position.y,)
    }
}