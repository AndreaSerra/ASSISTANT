function setup() {
  // Create the canvas
  var canvas = createCanvas(1920, 925);
  canvas.parent('sketch-holder');
  background(200);
}

function draw() {
  background(200);
  // An ellipse
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  ellipse(mouseX, mouseY, 200, 200);
}
