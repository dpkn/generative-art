var stepSize = 0.004
var scale = 20
var columns
var rows

var frameRt;

function setup(){
//  createCanvas(windowWidth,windowHeight)
  createCanvas(200,200)
  columns = floor(width / scale)
  rows = floor(height / scale)

  frameRt = createP('')
}

function draw(){
  background(255)
  var yOffset = 0;
  loadPixels()

  for(var x = 0; x < rows; x++){
    var xOffset = 0;
    for(var y = 0; y < columns; y++){
      var noise = (xOffset,yOffset) * 255

      var vector = p5.Vector.fromAngle(0)

      stroke(0)

      xOffset += stepSize
    }
    yOffset += stepSize
  }

  updatePixels()
  frameRt.html(floor(frameRate()))
}
