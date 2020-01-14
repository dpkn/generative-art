
let rows = 16;
let columns = 16;
let row = 0;
let column =1;

let colors = ['#16679e','#327552','#ffd811','#f36406','#b1080f','#3d1f45'];

function setup(){
  createCanvas(windowWidth,windowHeight)

  rowWidth = (windowHeight ) / rows;
  columnWidth = (windowHeight) / columns;

  noStroke();

  for(let i =0; i < 10; i++){
    let rowA = 0;
    let columnA = 0;

    for(let j =0; j < 10; j++){
      drawUnit(row+rowA,column+columnA);
      rowA += 6;
      columnA += 12;
    }

    row+=8;
    column+=6;
  }

}

function drawUnit(row,column){
  for(let i = 0; i < colors.length; i++){
    drawCross(row,column,colors[i])
    
    row--;
    column = column+ 2;
  }
}

function drawCross(row,column,color){
  fill(color);
  rect((row-1)*rowWidth, column*columnWidth, rowWidth*3, columnWidth) ;
  rect(row*rowWidth, (column-1)*columnWidth, rowWidth, columnWidth*3) ;
}


function draw(){
  
}
