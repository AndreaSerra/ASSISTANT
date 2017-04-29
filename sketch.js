function setup() {
  // Create the canvas
  var l = 1920;
  var h = 925;
  var canvas = createCanvas(l, h);
  canvas.parent('sketch-holder');

}

function draw() {
  background(233);
  // An ellipse
  fill('rgba(255, 117, 117, 0.5)');
  strokeWeight(2);
  stroke(255, 117, 117);
  ellipse(mouseX, mouseY, 200, 200);

  strokeWeight(45);
  stroke('rgba(255, 117, 117, 0.5)');
  noFill();
  rect(1, 1, 1915, 920);
}
