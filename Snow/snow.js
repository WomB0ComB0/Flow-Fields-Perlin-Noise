class Snow {
  constructor() {
    this.x = 0; 
    this.y = random(-50, 0);
    this.r = random(0, width/2);
    this.angle = 0;
    this.startingAngle = random(0, 360);
    this.size = random(2, 4);
  }
  
  update() {
    this.x = this.r*sin(this.angle + this.startingAngle);
    this.angle += 1;
    this.y += this.size*0.4;
  }
  
  display() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  done() {
    if (this.y > height) {
      return true;
    } else {
      return false;
    }
  }
}