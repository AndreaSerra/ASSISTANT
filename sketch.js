var diameter;
var border;
var particles = [];



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
    this.r = r;
    this.g = g;
    this.bl = bl;
    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x;
      this.history[i].y;
      this.history[i].r;
      this.history[i].g;
      this.history[i].bl;
    }
    var v = createVector(this.x, this.y);
    if (mouseIsPressed){
      this.history.push(v);
    }
  }
  // UPDATE FUNCTION


  // SHOW FUNCTION
  this.show = function() {
    ellipse(this.x, this.y, 24, 24);
    for (var i = 0; i < this.history.length; i++) {
      fill(color(this.history[i].r, this.history[i].g, this.history[i].bl));
      noStroke();
      ellipse(this.history.x, this.history.y, a, a);

    }
  }
  // SHOW FUNCTION
}
// BRUSH OBJ






// SKETCH
function setup() {
  // Create the canvas
  var l = 1920;
  var h = 925;
  var canvas = createCanvas(l, h);
  canvas.parent('sketch-holder');
  frameRate(90);
  var diameter = 50;
  var border = 20;
}


function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}


function draw() {
  background('rgba(210,210,210, 1)');
  if (attention == 0) {
    diameter = 0;
    var border = 0;
  } else if (attention == 1) {
    diameter = 75;
    var border = 20;
  } else {
    var diameter = map(counter, 0, 3000, 175, 50);
    var border = 20;
  }


  // PAGE
  strokeWeight(0);
  fill(255);
  rect(250, 125, 1420, 850);


  // MOUSE ellipse
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }


  // FIXED ellipse
  if (attention == 0 || attention == 1) {
    strokeWeight(0);
  } else if (attention == 2){
    strokeWeight(5);
  }
  fill('rgba(255, 117, 117, 0.5 )');
  stroke(255, 117, 117);
  ellipse(110, 815, diameter, diameter);


  // BORDER
  if (attention == 0 || attention == 1) {
    strokeWeight(0);
    stroke('rgba(255, 117, 117, 0)');
  } else if (attention == 2){
    strokeWeight(border);
    stroke('rgba(255, 117, 117, 0.5)');
  }
  rect(0, 925, 1900, 1);
}


function keyPressed() {
  if (keyCode === ENTER) {
    attention = 1;
    awakeSound.play();
  } else if (keyCode === SHIFT) {
    attention = 0;
    counter = 0;
    byeSound.play();
  }
}
