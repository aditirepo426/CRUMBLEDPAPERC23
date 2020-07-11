class Paper {
    constructor(x,y,radius){
    var options = {
        isStatic:true,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    }
    
    this.paper = Bodies.rectangle(x,y,width,height,options);
    this.radius = radius;
    this.width = width;
    this.height = height;
    World.add(world,this.paper);
} 
display(){
    var pos = this.paper.position;
    rectMode(CENTER);

    ellipse(pos.x,pos.y,this.radius);
    fill("red");
}
};
