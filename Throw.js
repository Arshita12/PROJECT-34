class Throw {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 2,
    };

    this.pointB = pointB;
    this.body= Constraint.create(options);
    World.add(world, this.body);
  }
  release(){
    this.body.bodyA = null;  
}

attach(body){
    Matter.Body.setPosition(body,{x:400,y:600});
    this.body.bodyA = body;
}

display(){
    if(this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(1);
        stroke("grey");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}
 /* attach(body) {
    this.body.bodyA = body;
  }

  fly() {
    this.body.bodyA = null;
  }

 Launch(bodyA) {
this.body.bodyA=bodyA;
 }

 display(){

 }
}
*/