var boobs = []
var boob
var app
var windowMargin = 100

class BoobModifier{
  constructor(bgColor,strokeColor){
    this.colorSchemes = [
      {stroke:'#FED18C',bg:'#E9806E'},
      {stroke:'#DB93B0', bg:'#FEDC97'},
      {stroke:'#FEFEFF', bg:'#74b9ff'},
      {stroke:'#6c5ce7',bg:'#55efc4'},
      {stroke:'#FEFEFF',bg:'#FED18C'},
      {stroke:'#E9806E',bg:'#FED18C'}
    ]
    var colorScheme = this.colorSchemes[parseInt(random(0,(this.colorSchemes.length)))]

    this.bgColor = bgColor || colorScheme.bg
    this.strokeColor = strokeColor || colorScheme.stroke
  }
}

function setup(){

  app = new BoobModifier()
  createCanvas(windowWidth,windowHeight);

  let x = windowWidth/2 - 150
  let y = windowHeight/2 -100
  let position = createVector(x,y)

  boob = new PairOfBoobs(position,app.strokeColor)

  var gui = new dat.GUI();
  gui.open()
  gui.add(boob,'width',100,150)
  gui.add(boob,'height',50,150)
  gui.add(boob,'curveSize',-100,100)
  gui.add(boob,'nippleSize',20,30)
  gui.add(boob,'debug')

  gui.addColor(app,'bgColor')
  gui.addColor(boob,'stroke')
  gui.addColor(boob,'fill')


/*  for(var i = 0; i<5; i++){
    //var colorScheme = colorSchemes[parseInt(random(0,(colorSchemes.length)))]
    var colorScheme = colorSchemes[i]
    fill(colorScheme.bg)

     noStroke()
    let x = 0
    let y = 200 *i
    let position = createVector(x+windowWidth/2-150,y+20)

    let boob = new PairOfBoobs(position,colorScheme.stroke)
    boobs.push(boob)
    rect(x, y, windowWidth, 200);
  }


    boobs.forEach(function(boob){
      boob.show();
    })*/
}

function draw(){
  background(app.bgColor)
  boob.show();
}
