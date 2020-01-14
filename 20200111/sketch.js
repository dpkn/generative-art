let margin = 100;
let lineWidth = 50;
let gap = lineWidth/3;

let offset = 0;
let maxBoxSize;

let colors1 = ['#515372','#325d82','#1471bf','#85ae8a','#c8c459','#f0da29','#ffe314']
let accents1 = ['#414160','#425180','#1471bf','#4d6e5e','#bdaa3c','#ddd02a','#ffe314'];
let colors2 = ['#5f4e73','#95324e','#c81317','#c63500','#f1a604','#f7c40f','#ffe70b'];
let accents2 = ['#58374c','#8b3558','#c81317','#f78232','#ee9802','#f0c003','#ffe70b'];
let allColors = colors1.concat(accents1).concat(colors2).concat(accents2);

function setup(){
  createCanvas(windowWidth,windowHeight)
  rectMode(CENTER)
  noFill();

  maxBoxSize = windowWidth/2 - margin * 2 -gap*2;

  frameRate(30);
}

function draw(){

  if(offset % 2 === 0){
    //background(random(colors1));
  }


  drawUnit(margin + windowWidth/4 - gap/2, windowHeight/2,colors1,accents1,offset);
  drawUnit((windowWidth/4)*3 - margin + gap/2, windowHeight/2,colors2,accents2,offset);

  offset++;

  let fps = map(sin(offset/100), -1, 1, 10, 60);
 // frameRate(fps);
}

function drawUnit(x,y,colors,accents, offset){

  let boxSize = maxBoxSize;

  for(let i =0; i < 7; i++){
    strokeWeight(lineWidth/2);
   // stroke(colors[((i+ offset) % colors.length)])
     stroke(colors[i])

     let sizeScale;
     if(i!==1){
        sizeScale = 1 + (offset % 1000)/100
     }else{
       sizeScale = 1;
     }
    rect(x,y,boxSize*sizeScale,boxSize*sizeScale);

    let tinyBoxSize = boxSize * sizeScale;
    strokeWeight(1);
   //stroke(accents[((i+ offset) % colors.length)]);
     stroke(accents[i]);
   

    for(let j =0; j < 9; j++){
        rect(x,y,tinyBoxSize+lineWidth/2-5,tinyBoxSize+lineWidth/2-5);
        tinyBoxSize -=5;
    }
  

    boxSize -= lineWidth*2;
  }
}
