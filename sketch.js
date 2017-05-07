function setup() {
  // Create the canvas
  var l = 1920;
  var h = 925;
  var canvas = createCanvas(l, h);
  //canvas.parent('sketch-holder');
  frameRate(90);

  var ellipseX=mouseX;
  var ellipseY=mouseY;
  var rangeOpacity=mouseX;
  var colorOpacityProva = map(rangeOpacity, 1, 1900, 1, 0);
}


function draw() {
  background('rgba(255,255,255, 0.3)');


  // MOUSE ellipse
  var coloreCerchio = color(r, g, bl);
  fill(coloreCerchio);
  strokeWeight(0);
  stroke(255, 117, 117);
  ellipse(ellipseX, ellipseY, a, b);


  // FIXED ellipse
  fill('rgba(255, 117, 117, '+colorOpacityProva+' )');
  strokeWeight(0);
  stroke(255, 117, 117);
  ellipse(110, 815, 100, 100);


  // BORDER
  strokeWeight(20);
  stroke('rgba(255, 117, 117, 0.5)');
  noFill();
  rect(10, 10, 1883, 905);
}
