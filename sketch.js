var diameter;
var border;

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


function draw() {
  background('rgba(210,210,210, 1)');
  if (attention == 0) {
    diameter = 0;
  } else if (attention == 1) {
    diameter = 100;
  } else {
    var diameter = map(counter, 0, 3000, 150, 65);
  }


  // PAGE
  strokeWeight(0);
  fill(255);
  rect(250, 125, 1420, 850);


  // MOUSE ellipse
  var coloreCerchio = color(r, g, bl);
  fill(coloreCerchio);
  strokeWeight(0);
  stroke(255, 117, 117);
  ellipse(mouseX, mouseY, a, b);


  // FIXED ellipse
  fill('rgba(255, 117, 117, 0.5 )');
  strokeWeight(0);
  stroke(255, 117, 117);
  ellipse(110, 815, diameter, diameter);


  // BORDER
  strokeWeight(border);
  if (attention = 0) {
    stroke('rgba(255, 117, 117, 0)');
  } else {
    stroke('rgba(255, 117, 117, 0.5)');
  }
  noFill();
  rect(10, 10, 1883, 905);
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    attention = 1;
  } else if (keyCode === RIGHT_ARROW) {
    attention = 0;
  }
}
