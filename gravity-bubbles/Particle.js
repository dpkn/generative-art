class Particle{
  constructor(position){
    this.position = position
    this.size = random(10,80)
    this.vsize = random(0,1)
    this.vx = random(-5,5)
    this.vy = random(-5,5)

    var r = random(255);
    var g = random(255);
    var b = random(255);
    this.color = color(r,g,b,60)
  }

  show(){
    fill(this.color,40)
    noStroke()
    ellipse(this.position.x,this.position.y,this.size)
  }

  update(){
    this.position.x += this.vx
    this.position.y += this.vy
    this.size += this.vsize
    this.lifetime--;
  }

  play(){
    this.playing = true;
     this.osc = new p5.Oscillator();
     this.osc.setType('sine');
     this.osc.freq(this.lifetime*2.2);
     this.osc.amp(0.04);
     this.osc.start();
  }
  stop(){
    this.playing = false;
    this.osc.amp(0,2)
  }

  get isOutOfView(){
    if((this.position.x>windowWidth || this.position.x < 0) && (this.position.y>windowHeight || this.position.y<0)){
      this.osc.stop();
      return true
    }
    return false
  }
  get isDead(){
    return this.lifetime < 0
  }
}
