class Box {
    // blueprint --- creates object --- properties and functions
    // properties
    // pre defined function to initialize (base values) properties of objects to be created
    constructor(x, y, width, height) {
      var options = {
        restitution: 1,
        friction: 0.8,
        denstity: 0.8,
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    //functions
    display() {
      var pos = this.body.position; //
      var angle = this.body.angle;
      push(); //for new settings 
       translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop(); //for original settings
    }
  }