function isTouching(Obj1, Obj2){
  var A = body.position;
  if (Obj1.A.x - Obj2.A.x < Obj1.width / 2 + Obj2.width / 2&& 
    Obj2.A.x - Obj1.A.x < Obj1.width / 2 + Obj2.width / 2
    && Obj1.A.y - Obj2.A.y < Obj1.height/2 + Obj2.height/2 &&
    Obj2.A.y - Obj1.A.y < Obj1.height/2 + Obj2.height/2){
    return true;

} else {
  return false;
}
}
