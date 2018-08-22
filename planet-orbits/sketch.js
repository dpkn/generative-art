let AEScale = 300

const orbits = [
  {
    name:'Mercury',
    distanceFromSun:0.39,
    radius:1.63104e-5,
    speed:87.96,
    color:'#969599'
  },
  {
    name:'Venus',
    distanceFromSun:0.723,
    radius:4.0455121e-5,
    speed:224.68,
    color:'#f4eed8'
  },
  {
    name:'Earth',
    distanceFromSun:1,
    radius:4.25875e-5,
    speed:365.26,
    color:'#6e769f'
  },
  {
    name:'Mars',
    distanceFromSun:1.524,
    radius:4,
    speed:686.98,
    color:'#d16545'
  },
  {
    name:'Jupiter',
    distanceFromSun:5.203,
    radius:4,
    speed:11.862 * 365.26,
    color:'#e7b28f'
  },
  {
    name:'Saturn',
    distanceFromSun:9.539,
    radius:4,
    speed:29.456 * 365.26,
    color:'#e7b28f'
  },
  {
    name:'Uranus',
    distanceFromSun:19.18,
    radius:4,
    speed:84.07 * 365.26,
    color:'#d2e7e9'
  },
  {
    name:'Neptune',
    distanceFromSun:30.06,
    radius:4,
    speed:164.81 * 365.26,
    color:'#6693d8'
  }
]

let drawnOrbits = []
let scaleSlider
let canvasCenter

function setup(){
  scaleSlider = createSlider(10,700,300,10)
  createCanvas(windowWidth,windowHeight);
  canvasCenter = createVector(width/2,height/2)
  orbits.forEach(orbit => {
    let drawnOrbit = new Orbit(canvasCenter,orbit.distanceFromSun,orbit.color,orbit.speed)

    drawnOrbits.push(drawnOrbit)
    drawnOrbit.drawOrbit();
  })
}

function draw(){
    AEScale = scaleSlider.value();

    background('#13253d')

    // draw the sun at the center
    let sunSize = 0.00464918382*AEScale * 20
    fill('#fff5d7')
    noStroke()
    ellipse(canvasCenter.x,canvasCenter.y,sunSize)


  drawnOrbits.forEach(orbit => {
    orbit.drawOrbit(AEScale);
    orbit.drawPlanet(AEScale)
  })

}
