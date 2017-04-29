function setup() {
  // Create the canvas
  createCanvas(1900, 900);
  background(200);
}

function draw() {
  background(200);
  // An ellipse
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  ellipse(mouseX, mouseY, 200, 200);
  
}