class Box {
    constructor(x, y, width, height) {
      var options = {
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=255
      World.add(world, this.body);
    }
    score(){
if(this.visibility<10 && this.visibility>-105){
  score = score + 1
    }
  }
    display(){
      console.log(this.body.speed)
      if(this.body.speed <3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black")
      fill("lightblue");
      rect(0, 0, this.width, this.height);
      pop();
      }else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 5
        pop();
      }
      
    }
  
}