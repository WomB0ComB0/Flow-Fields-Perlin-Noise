let waves1;
let waves2;
let waves3;

function setup() {
  createCanvas(1000, 1000);
  background(21, 47, 63);
  angleMode(DEGREES);
  waves1 = new Pack(8, 0, color(0, 105, 119));
  waves2 = new Pack(8, 90, color(156, 201, 222));
  waves3 = new Pack(8, 30, color(79, 148, 167));
}

function draw() {
  background(21, 47, 63, 30);
  waves1.display();
  waves2.display();
  waves3.display();
}
