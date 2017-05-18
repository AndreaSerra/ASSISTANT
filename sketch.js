var diameter;
var border;
var particles = [];

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


// BRUSH OBJ
function Particle(x, y, brush) {
  // VARIABLES
  this.x = x;
  this.y = y;
  this.brush = brush;
  this.colore = [];
  this.history = [];
  // UPDATE FUNCTION
  this.update = function() {
    this.x = mouseX;
    this.y = mouseY;
    this.brush = col;
    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x;
      this.history[i].y;
    }
    for (var i = 0; i < this.colore.length; i++) {
      this.colore[i].brush;
    }

    var v = createVector(this.x, this.y);
    if (mouseIsPressed){
      this.history.push(v);
       this.colore.push(brush);
    }
  }
  // UPDATE FUNCTION


  // SHOW FUNCTION
  this.show = function() {
    ellipse(this.x, this.y, 24, 24);
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      noStroke();
      fill(this.colore[i]);
      ellipse(pos.x, pos.y, a, a);

    }
  }
  // SHOW FUNCTION
}
// BRUSH OBJ





function mousePressed() {
  particles.push(new Particle(mouseX, mouseY,col));
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
    var diameter = map(counter, 0, 30000, 175, 50);
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
