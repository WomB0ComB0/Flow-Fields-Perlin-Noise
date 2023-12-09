class Pack {
  constructor(numWave, shift, color) {
    this.waves = [];
    this.numWave = numWave;
    this.shift = shift;
    this.color = color;
    
    for (let i=0; i<numWave; i++) {
      this.waves[i] = new Wave(this.shift, this.color);
    }
  }
  
  display() {
    for (let i=0; i<this.numWave; i++) {
      let horPos = i/(this.numWave-1) * width;
      push();
      translate(horPos, 0);
      this.waves[i].displayWave();
      pop();
    }
  }
}