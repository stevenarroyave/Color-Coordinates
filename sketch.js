//DAT405 / GAD405
//Exercise 4 – Color Coordinates
// Johan Steven Ospina Arroyave

function setup() {
  createCanvas(500, 500);
}

function draw() {

    fill(255,0,0);
    rect(0, 0, 250, 250);    //Red rectangle

    fill(0,255,0);
    rect(0, 250, 250, 250);    //Green rectangle

    fill(255,255,0);
    rect(250, 0, 250, 250);  //yellow rectangle

    fill(0,0,255);
    rect(250, 250, 250, 250);   //blue rectangle

    if (mouseX < 250 && mouseY < 250) {
      fill(0,0,0);
      rect(0, 0,500,250);
    } else {

   if (mouseX > 250 && mouseY > 250) {
      fill(0, 0, 0);
      rect(0, 250, 500, 250);
    } else {

  if (mouseX < 250 && mouseY > 250) {
      fill(0, 0, 0,);
      rect(0, 0, 250, 250);
      rect(250, 250, 250, 250);
  } else {

  if (mouseX > 250 && mouseY < 250) {
      fill(0, 0, 0);
      rect(250, 0, 250, 250);
      rect(0, 250, 250, 250);
  }
  }




// }
    }
  }
}
