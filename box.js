class Box {

    constructor(x, y, width, height) {

      var options = {

        isStatic:false,
        'friction':1.0,
          'restitution':0.8,
        'density':1.0
        
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.height = height;
      this.width = width;
     
      
      World.add(world, this.body);

    }

    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
   
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  