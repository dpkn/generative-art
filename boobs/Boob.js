class PairOfBoobs{

  constructor(position,stroke,width,height,asymmetry,nippleSize,fill){
    this.position = position
    this.width =  width || random(100,150)
    this.height = height ||random(50,150)
    this.curveSize = random(-100,100)
    this.stroke = stroke || '#000000'
    this.fill = fill || '#000000'
    this.asymmetry = asymmetry || random(0,1)
    this.nippleSize = nippleSize || random(7,25)
    this.debug = false
    this.boobAmputated
  }

  drawBoob(isSecondBoob){
    var xOffset = 0

    if(isSecondBoob){
      xOffset = this.width+20
    }

    var x = this.position.x + xOffset
    var y = this.position.y

    var p1 = { x: x , y: y }
    var p2 = { x: x, y: y+this.height }

    var p3 = { x: x+this.width, y: y+this.height }
    var p4 = { x: x+this.width, y: y }

    var curveSize = this.curveSize
    var cp1 = {x:p1.x+curveSize, y:p1.y-curveSize}
    var cp2 = {x:((p3.x-p2.x)/2)+p2.x, y:p2.y+this.height/6+Math.abs(curveSize*0.3)}
    var cp4 = {x:p4.x-curveSize, y:p4.y-curveSize}

    stroke(this.stroke);
    fill(this.fill)

    if(this.debug){
      strokeWeight(1)
      noFill();
      ellipse(cp1.x,cp1.y,15)
      ellipse(cp2.x,cp2.y,15)
      ellipse(cp4.x,cp4.y,15)
      ellipse(p1.x,p1.y,15)
      ellipse(p2.x,p2.y,15)
      ellipse(p3.x,p3.y,15)
      ellipse(p4.x,p4.y,15)
    }

    strokeWeight(3)
    noFill();

    beginShape();
      curveVertex(cp1.x,cp1.y)
      curveVertex(p1.x,p1.y)
      curveVertex(p2.x,p2.y)
      curveVertex(cp2.x,cp2.y)
      curveVertex(p3.x,p3.y)
      curveVertex(p4.x,p4.y)
      curveVertex(cp4.x,cp4.y)
    endShape();
    fill(this.stroke)

    var nipple = {  x: (p2.x + p3.x)/2,
                    y: (p2.y)
                  }
    ellipse(nipple.x,nipple.y,this.nippleSize)
  }

  show(){
    noFill();
    this.drawBoob()
    this.drawBoob(true)
  //  this.position.x+= this.width*1.3;
    //this.drawBoob()
  }

}
