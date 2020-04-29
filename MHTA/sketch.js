var img, //image 
  imgCopy, //resized image of the image (visible)
  imgRatio; //ratio of the image h/w    

function preload() {
  img = loadImage("assets/MHTA.png", img => imgCopy = img.get());
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageRatio = img.height / img.width;
  print("imageRatio: " + imageRatio);
}

function draw() {
  background(255);
  image(imgCopy, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  print("resizing to: " + windowWidth + " " + windowHeight);
  if (windowWidth < img.width) {
    imgCopy = img.get();
    imgCopy.resize(windowWidth, 0);
  }
}