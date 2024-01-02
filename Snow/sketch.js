let snowflakes = []; 

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  if (random(1) < 0.5) {
    snowflakes.push(new Snow());
  }
  
  
  translate(width/2, 0);
  
  for (let i=0; i<snowflakes.length; i++) {
    snowflakes[i].update();
    snowflakes[i].display();
    
    if (snowflakes[i].done() == true) {
      snowflakes.splice(i, 1);
    }
  }
  
  // print(snowflakes.length);
}