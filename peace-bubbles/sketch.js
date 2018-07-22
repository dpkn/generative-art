var particles = []

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(255)
  if(mouseIsPressed && particles.length < 10){
      var position = createVector(mouseX,mouseY);
      var dot = new Particle(position)
      particles.push(dot)
  }

  // particles.forEach(function(particle,i){
  for (var i = particles.length-1; i >= 0; i--) {
    var particle = particles[i]

    particle.update();
    particle.show()
    if(!particle.playing){
      particle.play()
    }
    if(particle.isDead){
      particles.splice(i,1)
      particle.stop()
    }

  }
  //})

}
