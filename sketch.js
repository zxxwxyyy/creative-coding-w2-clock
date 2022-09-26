//Creative Coding W2 - Clock 
// Liqian Zhang

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);

}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  
  //shadow effect - drawingContext function
  let offsetX = map(sc * 5, 0, width, sc, -20);
  let offsetY = map(sc * 5, 0, height, sc, -20);

  drawingContext.shadowOffsetX = offsetX;
  drawingContext.shadowOffsetY = offsetY;
  drawingContext.shadowBlur = 66;
  drawingContext.shadowColor = color(320, 100, 76);

  //digital clock
  push()
  rotate(-270);
  noStroke();
  textSize(sc + 2)
  fill(sc * 3);
  text(hr + ':'+ mn + ':' + sc, -230, -190);
  let noon = hr 
  if(hr > 12){
    text('PM', -200, -140)
  }
  else{
    text('AM', -200, -140)
  }
  pop()

  //second outline
  push();
  strokeWeight(10);
  stroke(120, sc + 30, sc * 5);
  fill(120, sc * 2, 30);
  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, scAngle);
  pop();

  //second pointer
  push();
  let i = 1
  while(i < sc){
    i = sc * 2.2
  }
  stroke(120, sc + 30, sc * 5);
  rotate(scAngle);
  line(0, 0, i, 0);
  pop()

  //minute outline
  strokeWeight(10);
  stroke(300, mn * 20, 75);
  noFill();
  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAngle);

  //minute pointer
  push();
  strokeWeight(8);
  noFill;
  stroke(300, mn * 20, 75); 
  rotate(mnAngle);
  line(0, 0, 110, 0);
  pop();

  //hour outline
  strokeWeight(10),
  stroke(200, 54, 70);
  noFill();
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 300, 300, 0, hrAngle);

  //hour pointer
  push();
  strokeWeight(8);
  stroke(200, 54, 70);
  rotate(hrAngle);
  line(0, 0, 50, 0);
  pop()

  //number2
  push();
  rotate(0);
  strokeWeight(10);
  stroke(sc * 3);
  noFill();
  beginShape();
  vertex(180, -15);
  vertex(180, 10);
  vertex(230, -15);
  vertex(230, 10);
  endShape();
  pop();

  //number 6
  push();
  rotate(180);
  strokeWeight(10);
  stroke(sc * 3);
  noFill();
  beginShape();
  vertex(180, 10);
  vertex(180, -20);
  vertex(210, -20);
  vertex(210, 10);
  endShape();
  line(180, 10, 240, 10);
  pop();

  // number 9
  push();
  rotate(270);
  strokeWeight(10);
  stroke(sc * 3);
  noFill();
  beginShape();
  vertex(180, 20);
  vertex(180, -10);
  vertex(210, -10);
  vertex(210, 20);
  endShape();
  line(180, 20, 240, 20);
  pop();

  // number 3
  push();
  rotate(90);
  strokeWeight(10);
  stroke(sc * 3);
  noFill();
  line(170, 10, 230, 10);
  line(170, 10, 170, -30);
  line(200, 10, 200, -30);
  line(230, 10, 230, -30);
  pop();

  // number 1
  push();
  rotate(0);
  strokeWeight(10);
  stroke(sc * 3);

  let twlX = 180
  if(twlX < 220){
    twlX = 180 + sc
    line(180, -40, twlX, -40)
    if(twlX = 230){
      return
    }
  }
  pop();


}
