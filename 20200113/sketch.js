let gap = 10;
let rows = 16;
let columns = 32;
let rowWidth, columnWidth;
let marginX = 200;
let margin = 100;

function setup(){
  createCanvas(windowWidth,windowHeight)

  rowWidth = (windowWidth - margin*2 - gap *rows) / rows;
  columnWidth = (windowHeight - margin*2 - gap *columns) / columns;

  l
}

function draw(){
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
       fill(colours[row * rows + column]);
       rect(margin+row*rowWidth+gap*row, margin+column*columnWidth+gap*column, rowWidth, columnWidth) ;
    }
  }
}
