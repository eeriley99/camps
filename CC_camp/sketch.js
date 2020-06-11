/*
A modification of Stars P2 by jjordao
https://editor.p5js.org/jjordao/sketches/_FvTQhgQ5*/


var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(7);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(250, 0, 150);
  star(width / 2, height / 2, 3, 7, 5);
  starsFall(400);
}



function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function starsFall(num_stars) {
  for (let i = 0; i <= num_stars; i += 10) {
    let x = random(0, windowWidth);
    let y = random(0, windowHeight);
    let r = random(0, 255);
    let b = random(0, 255);
    let g = random(0, 255);
    star(x, y, 3, 7, 5);
    fill(r, g, b);
  }
}
