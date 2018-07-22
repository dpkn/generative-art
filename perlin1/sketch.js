var startingPoint = 0
var stepSize = 0.00 4
var speed = 0.005

function setup(){
  createCanvas(windowWidth,windowHeight)
}

function draw(){
  background(51)
  stroke(255)
  strokeWeight(1)
  noFill()
  beginShape()

  var xOffset = startingPoint;

  for(var x = 0; x < width; x++){
    var y = noise(xOffset) *height
    vertex(x,y)

    // Draw a coloured circle in the middle of the screen
    if(x === width/2){
      fill('#3498db')
      noStroke()
      ellipse(width/2,noise(xOffset) *height,20,20)
      stroke(255)
      noFill()
    }

    xOffset += stepSize
  }
  endShape()



  startingPoint += speed

}
