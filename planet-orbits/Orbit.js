class Orbit{

  constructor(position,orbit = 10,color = '#FFFFFF',speed){
    this.position = position
    this.orbit = orbit
    this.color = color
    this.speed = speed

    this.planet = {}

    this.planetTime = 0;
  }

  drawOrbit(AEScale){
    strokeWeight(2)
    stroke(this.color)
    noFill()
    ellipse(this.position.x,this.position.y,this.orbit*AEScale)
  }

  drawPlanet(AEScale){

    fill(this.color)
    noStroke()

    let x = this.orbit*AEScale/2 * cos(this.planetTime) + this.position.x
    let y = this.orbit*AEScale/2 * sin(this.planetTime) + this.position.y

    this.planet.position = createVector(x,y)

    ellipse(this.planet.position.x,this.planet.position.y,20)

    this.planetTime = this.planetTime + (365.26/this.speed) *0.01 
  }
}
