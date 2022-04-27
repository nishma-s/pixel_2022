// photo is by Naohiro Yako
// https://designyoutrust.com/2017/12/photographer-naohiro-yako-captures-colorful-dazzling-nighttime-pictures-japan/

let japan; // image
let x;
let y;
let color;

function preload() {
  japan = loadImage("japan.jpg");
}

function setup() {
  createCanvas(400, 400);
  frameRate(100);
  //image(name, x, y, w, h);
  image(japan, 0, 0, width, height); // display image
}

function draw() {
  // random coordinate
  x = random(width);
  y = random(height);
  
  // now get color in that coordinate
  color = get(x, y);
  
  // and draw small ellipse of that color in that position
  noStroke();
  fill(color);
  ellipse(x, y, 8);
}