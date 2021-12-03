class Arrow{
  constructor(){
    var description = {
      density: 0.7,
      motion: 2,
      isStatic: false,
      collisionFiler:{category: 2}//novo, dando uma categoria para aplicar o filtro no alvo e no arco
      };
    this.image = loadImage("Images/Arrow.png");
    this.width = 50;
    this.height = 20;
    this.body = Bodies.rectangle(80,215,this.width,this.height,description);
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("white");
    imageMode(CENTER);
    image(this.image, 0, 0, 150, 70);
    pop();
  }
}
