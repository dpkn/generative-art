function Branch(begin,end){
  this.begin = begin;
  this.end = end;
  this.angle = PI/5

  this.show = function(){
    stroke(255)
    strokeWeight(3)
    line(this.begin.x,this.begin.y,this.end.x,this.end.y)
  }
  this.branch = function(branchDirection){
    // Create two branches at end of the current branch

    // Create a vector in the direction of current branch, then rotate in direction of next branch
    var direction = p5.Vector.sub(this.end,this.begin)
    direction.rotate(this.angle*branchDirection)
    direction.mult(0.7) //shrink new branch
    var newEnd = p5.Vector.add(this.end,direction)

    var rightBranch = new Branch(this.end,newEnd)
    return rightBranch
  }
}
