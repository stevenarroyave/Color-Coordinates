//DAT405 / GAD405
//Exercise 4 – Color Coordinates
// Johan Steven Ospina Arroyave

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  var mouse1 = map(mouseX, 0, width, 0, 255);
  var mouse2 = map(mouseY, 0, height, 0, 255);
  var mouse3 = map(mouseX, 0, width, 255, 0);
  var mouse4 = map(mouseY, width, 255, 0);


  var color1 = color(255,0,0, mouse1);
  var color2 = color(0,255,0, mouse2);
  var color3 = color(255,255,0, mouse3);
  var color4 = color(0,0,255, mouse4);

    fill(color1);
    rect(0, 0, 250, 250);    //Red rectangle

    fill(color2);
    rect(0, 250, 250, 250);    //Green rectangle

    fill(color3);
    rect(250, 0, 250, 250);  //yellow rectangle

    fill(color4);
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
