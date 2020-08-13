class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.width = 450;
      this.height = 600;
      this.thickness = 10;
      this.image = loadImage("tree.png");
      this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic: true});
      this.leftBody = Bodies.rectangle(0,this.y - this.height/2,this.thickness,this.height,{isStatic: false});
      this.rightBody = Bodies.rectangle(this.x + this.width/2,this.y - this.height/2,this.thickness,this.height,{isStatic: false});
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    display(){
      var pos = this.bottomBody.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("grey");
      image(this.image,0,-this.height/2,this.width, this.height);
      pop();
    }
  };