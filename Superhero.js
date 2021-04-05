class Superhero {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':false,
          'restitution':0.4,
          'friction':1.0,
          'density':20,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("Superhero-01.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      //strokeWeight(4);
      //stroke("black");
      //fill("red");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }