function setup() {
  // Create the canvas
  var l = 1920;
  var h = 925;
  var canvas = createCanvas(l, h);
  canvas.parent('sketch-holder');

}

function draw() {
  background(250);
  // MOUSE ellipse
  fill('rgba(255, 117, 117, 0.5)');
  strokeWeight(0);
  stroke(255, 117, 117);
  ellipse(mouseX, mouseY, 100, 100);

  // FIXED ellipse
  fill('rgba(255, 117, 117, 0.5)');
  strokeWeight(0);
  stroke(255, 117, 117);
  ellipse(110, 815, 100, 100);

  // BORDER
  strokeWeight(20);
  stroke('rgba(255, 117, 117, 0.5)');
  noFill();
  rect(10, 10, 1883, 905);

  if (counter<10) {
    // MOUSE ellipse
    fill('rgba(255, 117, 117, 0.5)');
    strokeWeight(0);
    stroke(255, 117, 117);
    ellipse(mouseX, mouseY, 100, 100);
  }
}
