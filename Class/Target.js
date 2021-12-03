class Target{
  constructor(x,y){
    var point = {
      restitution: 1,
      isStatic: true,
      collisionFilter: {mask: 2}//novo, para a flecha poder passar direto pelo alvo
    };
    this.image = loadImage("Images/Target.png");
    this.r = 40;
    this.body = Bodies.circle(x, y, this.r, point);

    this.visibility = 255;
    World.add(world, this.body);
  }

 display(){
  push();
  var pos = this.body.position;
  tint(255,this.visibility);
  imageMode(CENTER);
  image(this.image, pos.x, pos.y, 120,120);
  pop();
  
  //novo
  //calcula os pontos quando a flecha encosta no alvo, e faz com que o alvo suma (e com isso seja retirado do mundo)
  var hit = Matter.SAT.collides(this.body, flecha.body);
  if(hit.collided){
    Pontos+=1;
    this.visibility = 0;
  }

  if(this.visibility<=0){
    World.remove(world, this.body);
   } 

 }
}