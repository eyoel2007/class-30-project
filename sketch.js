function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
ellipse(0, 50, 33, 33); // Left circle

push(); // Start a new drawing state
translate(50, 0);
strokeWeight(10);
fill(204, 153, 0);
ellipse(0, 50, 33, 33); // Middle circle
pop(); // Restore original state

ellipse(100, 50, 33, 33); // Right circle