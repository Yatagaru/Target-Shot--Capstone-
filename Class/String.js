class String{
 // Constructor e propriedades
  constructor(bodyA,pointB,stiffness, legth){//novo passei mais propriedades pelo constructor pra dar pra mudar mais facilmente, pode tirar se preferir
  var options = {
    bodyA: bodyA,
    pointB: pointB,
    length: legth,
    stiffness: stiffness,
    
  };
 // Criação da linha
this.string = Constraint.create(options);
 World.add(world,this.string);
 this.bodyA = bodyA;
 this.pointB = pointB;
 //novo inventei pra fazer a linha seguir o mouse no function mouseDragged
 this.posAX = this.string.bodyA.position.x -50;
 this.posAY = this.string.bodyA.position.y;
  
 }
// Função para o sketch.js
 atirar(){
  if(estado===Jogar){
    this.string.bodyA = null;
 }
}

 //novo
 //função de ligar
 ligar(){
 if(estado===Jogar){
  this.string.bodyA =this.bodyA;
  Body.setPosition(flecha.body, {x:8, y:215});
  Body.setAngle(flecha.body, 0);
  flecha.body.speed = 0;
  }
 }


display(){
// variáveis de posição  
  var Ap = this.bodyA.position;
  var Bp = this.pointB;
// Criação do efeito de esticar e as linhas  
  if(this.string.bodyA){
    push();
  if(Ap.x>40 || Ap.x>100 ){
    strokeWeight(2);
} else{
    strokeWeight(3);
}
  stroke(0,0,0);
  line(this.posAX, this.posAY, Bp.x-3, Bp.y-75);
  line(this.posAX, this.posAY, Bp.x-3, Bp.y+75);
  
  pop();
   

  }
  if(!this.string.bodyA){
    push()
  stroke(0,0,0)
  strokeWeight(2)
  line(76, 215, Bp.x-3, Bp.y-75);
  line(76, 215, Bp.x-3, Bp.y+75);
  
    pop();
  }
 }
}
