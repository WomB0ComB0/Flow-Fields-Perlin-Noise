/*
----- Coding Tutorial by Patt Vira ----- 
Name: Pacman-Inspired Animation
Video Tutorial: https://youtu.be/y3Vt_uGGggU

Reference: 
- Easing equations: https://easings.net

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let size = 50; let offset = 5; let cols; let rows;
let pacmans = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  cols = width/size;
  rows = height/size;
  
  for (let i=0; i<cols; i++) {
    pacmans[i] = [];
    for (let j=0; j<rows; j++) {
      let startingAngle;
      if (j%2 == 0) {
        if (i%2 == 0) {
          startingAngle = 90; 
        } else {
          startingAngle = 180;
        }
      } else {
        if (i%2 == 0) {
          startingAngle = 0;
        } else {
          startingAngle = 270;
        }
      }
      pacmans[i][j] = new Pacman(size/2 + i*size, size/2 + j*size, startingAngle);
    }
  }

}

function draw() {
  background(0, 0, 255);
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      pacmans[i][j].display();
      pacmans[i][j].move();
    }
  }
}