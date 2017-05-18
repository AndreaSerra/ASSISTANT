

// BRUSH OBJ
function Particle(x, y) {
  // VARIABLES
  this.x = x;
  this.y = y;
  this.history = [];
  // UPDATE FUNCTION
  this.update = function() {
    this.x = mouseX;
    this.y = mouseY;
    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x;
      this.history[i].y;
    }
    var v = createVector(this.x, this.y);
    if (mouseIsPressed){
      this.history.push(v);
    }
  }
  // UPDATE FUNCTION
  // SHOW FUNCTION
  this.show = function() {
    fill(0, 150);
    ellipse(this.x, this.y, 24, 24);
    
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      fill(255);
      noStroke();
      ellipse(pos.x, pos.y, 10, 10);
    }
  }
  // SHOW FUNCTION
}
// BRUSH OBJ





// SKETCH
var particles = [];

function setup() {
  createCanvas(600, 600);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}


function draw() {
  background(200);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
  
  //line(frameCount, 0, frameCount, height);
}
// SKETCH