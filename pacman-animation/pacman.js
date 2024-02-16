class Pacman {
  constructor(x, y, startingArc) {
    this.x = x;
    this.y = y;
    this.startingArc = startingArc;
    this.endingArc = this.startingArc + 270;
    
    this.angle = 0;
    this.amt = 0;
    
  }
  
  display() {
    noStroke();
    push();
    translate(this.x, this.y);
    arc(0, 0, size - offset, size - offset, this.startingArc + this.angle, this.endingArc + this.angle);
    pop();
  
  
  }
  
  move() {
    if (this.amt > 1) {
      this.amt = 0;
    } else {
      this.amt += 0.01;
    }
    
    this.angle = easeInOutQuint(this.amt) * 360;
  }
  
  
  
}