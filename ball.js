class Ball{
constructor(x,y,radius){
    var options={
        density:0.1,
        friction:0.1,
        restitution:0.8,
    }
    this.body=Bodies.circle(x,y,radius/2,options)
    this.radius=radius/2
    this.image=loadImage("ball.png")
    World.add(world,this.body)
}
display(){
    push()
    rectMode(CENTER)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    imageMode(RADIUS)
    image(this.image,0,0,this.radius,this.radius)
    pop()
}


}
