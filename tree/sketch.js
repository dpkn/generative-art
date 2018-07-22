var slider
var root
var gui
var tree = []
var angle
var rootLength = 200

function setup(){
  createCanvas(windowWidth,windowHeight)

  var pointA = createVector(width/2, height)
  var pointB = createVector(width/2,height-rootLength)
  root = new Branch(pointA,pointB)
  tree.push(root)

  for(var i = 1; i<250; i++){
    tree.push(tree[i-1].branch(1))
    tree.push(tree[i-1].branch(-1))
  }

}
function draw(){
  background(51)
  for(var i = 0; i<tree.length; i++){
    tree[i].show();
  }
}
