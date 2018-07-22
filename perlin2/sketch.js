var stepSize = 0.004

function setup(){
  createCanvas(windowWidth,windowHeight)
  pixelDensity(1)
}

function draw(){
  var yOffset = 0;
  loadPixels()

  for(var x = 0; x < width; x++){
    var xOffset = 0;
    for(var y = 0; y < height; y++){
      var index = (x + y * width) * 4
      var r = noise(xOffset,yOffset) * 255
      pixels[index + 0] = r
      pixels[index + 1] = r
      pixels[index + 2] = r
      pixels[index + 3] = 255 // opacity

      xOffset += stepSize
    }
    yOffset += stepSize
  }

  updatePixels()
  noLoop()
}
