let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 5; // Speed of the shape
let yspeed = -2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
let xsplim = 0;
let ysplim = 0;


function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight);
        myCanvas.parent("canvas");
    background(255);
    xpos = width / 2;
    ypos = height / 5;
}

function draw() {
   //xspeed
    if (xsplim == 0){
      if(xspeed<3){
      xspeed+= 0.005}
    else
    xsplim = 1
    }
    else{
      if(xspeed>1){
      xspeed-= 0.005}
    else
    xsplim = 0
    }

  //yspeed
      if (ysplim == 0){
      if(yspeed<3){
      yspeed+= random(0.01)}
    else
    ysplim = 1
    }
    else{
      if(yspeed>1){
      yspeed-= random(0.01)}
    else
    ysplim = 0
    }



    // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);



    noStroke(0);
        fill(0,700/xspeed,500/xspeed);
    ellipse(xpos, ypos, 400/xspeed, 400/xspeed);

      fill(255, 30);
    noStroke();
    rect(0, 0, windowWidth, windowHeight);
}


// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
