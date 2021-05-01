class Box {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.5,
        friction:1,
        density:0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
    }

    score(){ 
      if(this.visibility<0 && this.visibility >-105){
         score++; 
        } 
    }

    display(){
      if(this.body.speed<100){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle); 
        fill('brown');
        stroke('black');
        strokeWeight(2);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body)
        push();
        this.visibility=this.visibility-5;
        pop();
      }
     

    }
  };
