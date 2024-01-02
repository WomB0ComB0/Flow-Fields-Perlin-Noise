let img;
let sizes = [];
let cols; let rows; 
let size = 10;

function preload(){
  img = loadImage("./images/Image2.jpeg");
}

function setup() {
  createCanvas(400, 500);
  cols = width/size; rows = height/size;
  for (let i=0; i<cols; i++){
    sizes[i] = [];
    for (let j=0; j<rows; j++){
      sizes[i][j] = 0; 
    }
  }
  rectMode(CENTER);
  
  img.resize(400, 0);
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      let c = img.get(i*size, j*size);
      sizes[i][j] = map(brightness(c), 0, 100, size*2, 0);
      fill(c);
      noStroke();
      rect(size/2+i*size, size/2+j*size, sizes[i][j], sizes[i][j]);
    }
  }
}

function draw() {
  // background(255);
  
  
}