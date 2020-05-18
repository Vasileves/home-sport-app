let rad = 60; // Width of the shape
function setup() {
  frameRate(60);
  let myCanvas = createCanvas(windowWidth, windowHeight);
      myCanvas.parent("canvas");
  noStroke();
  let rancol;
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
    fill(255,255,255,5);
    rect(0, 0, windowWidth, windowHeight);
    fill(80005/mouseY, 0, 80005/mouseX, 255);
    ellipse(mouseX, mouseY, 100, 100);
    noStroke();
    }


    // Изменяем размер канваса, если изменился размер окна
    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
    }
