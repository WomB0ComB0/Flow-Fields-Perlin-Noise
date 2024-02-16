class Heart {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.r = random(1, 2.25);
    
    this.dy = random(2, 3);
    
    this.c = colors[floor(random(colors.length))];
  }
  display () {
    push();
    fill(this.c)
    translate(this.x, this.y)
    beginShape();
    for (let t = 0; t < 360; t++ ){
      let x = this.r*(16*sin(t)*sin(t)*sin(t));
      let y = -this.r*(13*(cos(t)) - 5*cos(2*t) - 2 * cos(3*t) - cos(4*t));
      vertex(x, y);
    }
    endShape();   
    pop();
  }
  
  fall() {
    this.y += this.dy
  }
}