let SCALES = [];
let img;

function preload() {
  // Load the image (must be in same folder as sketch.js)
  img = loadImage("BM.jpg");
}

function setup() {
  // Prepare scale weights
  for (let i = 0; i < 50; i++) {
    SCALES.push(1);
    SCALES.push(2);
  }
  SCALES.push(5);
  SCALES.push(2);

  createCanvas(img.width, img.height);

  // Draw the actual image onto canvas (this fixes your blank / blocky view)
  image(img, 0, 0);

  // Read its pixel data
  img.loadPixels();

  let pixelSize = 10;

  firstPass(pixelSize);
  secondPass(12, pixelSize);
}

function secondPass(pixelAmount, pixelSize) {
  for (let p = 0; p < pixelAmount; p++) {
    // pick random pixel
    let x = floor(random(img.width));
    let y = floor(random(img.height));

    // pixel index in the RGBA array
    let index = (x + y * img.width) * 4;

    // correct channel order (RGBA)
    let r = img.pixels[index + 0];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];
    let a = img.pixels[index + 3];

    noStroke();
    fill(r, g, b, a);

    let randSz = random(SCALES) * pixelSize;

    push();
    translate(x, y);
    scale(randSz);
    rotate(radians(random(10, 25)));
    rect(0, 0, 1, 1);
    pop();
  }
}

function firstPass(pixelSize) {
  rectMode(CENTER);
}
