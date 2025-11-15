let SCALES = []
let img;
function preload() {
  img = loadImage('BM.jpg');
}

function setup() {
  for(let i=0; i<50; i++) {
    SCALES.push(1);
    SCALES.push(2);
  }
  SCALES.push(5);
  SCALES.push(2);
  
  img.loadPixels();
  //
  //console.log(img.width, img.height);
  //
  createCanvas(img.width, img.height);
  
  let pixelSize = 10;
  
  firstPass(pixelSize);
  secondPass(12, pixelSize);
}

function secondPass(pixelAmount, pixelSize) {
  for(let p = 0; p<pixelAmount; p++) {
    //choose random x and y to draw a big square.
    let x = Math.floor(random(img.width));
    let y = Math.floor(random(img.height));
  
  
    index= (floor(x) + floor(y) * img.width) * 4;
    r = img.pixels[index]
    b = img.pixels[index + 1]
    g = img.pixels[index + 2]
    a = img.pixels[index + 3]
    //pixel_brightness = (red + blue + green) / 3 
    noStroke();
    fill(r, b, g, a)
    
        let randSz = random(SCALES) * pixelSize;
      push()
      translate(x,y);
      scale(randSz);
      rotate(radians(random(10,25)));
      rect(0,0, 1, 1);
      pop();
  }
}

function firstPass(pixelSize) {
  rectMode(CENTER);
}