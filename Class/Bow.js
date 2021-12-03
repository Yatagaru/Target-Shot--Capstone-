class Bow{
  constructor(){
    var adjetives = {
      restitution: 1,
      friction: 0,
      isStatic: true,
      collisionFilter:{mask: 2}//novo, assim o arco não colide com a flecha
  };
  this.image = loadImage("Images/Bow.png");
  this.width = 50;
  this.height = 50;
  
  this.body = Bodies.rectangle(93, 215, this.width, this.height,adjetives);//tive quye mudar a posição porque a imagem não estava no meio do corpo (imageMode estava embaixo do image)
  
  World.add(world, this.body);
}

display(){
  push();
  //mudei o imageMode pra antes da imagem
  imageMode(CENTER);
  image(this.image,this.body.position.x,this.body.position.y, 175,175);
  pop();
}



}
