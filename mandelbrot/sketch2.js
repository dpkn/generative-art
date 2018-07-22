var minVal = -2.5
var maxVal = 2.5

var minSlider
var maxSlider

function setup(){

  minSlider = createSlider(-2.5, 0, -2.5, 0.01)
  maxSlider = createSlider(0, 2.5, 2.5, 0.01)

  createCanvas(300,300)
  pixelDensity(1)

}

function draw(){
  loadPixels();

  var maxIterations = 50;

  for(var x = 0; x<width; x++){
    for(var y = 0; y < height; y++){

      var a  = map(x, 0, width, minSlider.value(), maxSlider.value())
      var b  = map(y, 0, height, minSlider.value(), maxSlider.value())

      var ca = a;
      var cb = b;

      var round = 0
      var z = 0

      while(round < maxIterations){
        var aa = a * a - b * b
        var bb = 2 * a * b

        a = aa + ca
        b = bb + cb

        if(a + b > 16){
          break
        }

        round++
      }

      var brightness = map(round, 0, maxIterations, 0, 1)
      brightness = map(sqrt(brightness), 0, 1, 0)

      var pixel = (x+ y * width) * 4
      pixels[pixel + 0] = brightness
      pixels[pixel + 1] = brightness
      pixels[pixel + 2] = brightness
      pixels[pixel + 3] = 255
    }
  }

  updatePixels()
}
