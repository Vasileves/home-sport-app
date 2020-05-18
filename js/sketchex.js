let rad = 60; // Width of the shape
function setup() {
  frameRate(60);
  let myCanvas = createCanvas(windowWidth, windowHeight);
      myCanvas.parent("canvas");
      noStroke();
      szlim = 0;
      sz = 100;
    }

    function draw() {

        if (szlim == 0){
          if(sz<100){
          sz+= random(1)}
        else
        szlim = 1
        }
        else{
          if(sz>30){
          sz-= random(1)}
        else
        szlim = 0
        }



        fill(255,255,255,5);
        rect(0, 0, windowWidth, windowHeight);
        fill(80005/mouseY, 0, 80005/mouseX, 50);
        ellipse(random(windowWidth), random(windowHeight), sz, sz);
        noStroke();
        }



// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
