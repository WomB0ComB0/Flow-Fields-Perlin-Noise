let hearts = [];
let colors = [];
let s = 'Happy Valentines day!'
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES)
  colors = ["#edbba8","#e66f3c","#c6b6d5","#f1d147","#a4cd98", "#95accb"]
}

function draw() {
  background("#00060d");
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].display();
    hearts[i].fall();
  }
  
  for (let i = 0; i < hearts.length; i++){
    if(hearts[i].y > height + 20){
      hearts.splice(i, 1);
    }
  }
  Text();
}

function Text() {
  
  textSize(36);
  fill("#ff69b4");
  textAlign(CENTER, TOP);
  text(s, width/2, 20);
}

function mouseDragged() {
 hearts.push(new Heart(mouseX, mouseY)) 
}