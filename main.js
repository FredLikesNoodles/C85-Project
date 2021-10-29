var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

gc_width = 75;
gc_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

gc_x = 5;
gc_y = 225;

function add() {
  bi = new Image();
  bi.onload = uploadBackground;
  bi.src = background_image;

  gi = new Image();
  gi.onload = uploadgreencar;
  gi.src = greencar_image;
}

function uploadBackground() {
  ctx.drawImage(bi, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
  ctx.drawImage(gi, gc_x, gc_y, gc_width, gc_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == "38") {
    up();
    console.log("up");
  }

  if (keyPressed == "40") {
    down();
    console.log("down");
  }

  if (keyPressed == "37") {
    left();
    console.log("left");
  }

  if (keyPressed == "39") {
    right();
    console.log("right");
  }
}

function up() {
  if (gc_y >= 100) {
    gc_y = gc_y - 10;
    console.log("When up arrow is pressed, x = " + gc_x + " | y = " + gc_y);
    uploadBackground();
    uploadgreencar();
  }
}

function down() {
  if (gc_y <= 300) {
    gc_y = gc_y + 10;
    console.log("When down arrow is pressed, x = " + gc_x + " | y = " + gc_y);
    uploadBackground();
    uploadgreencar();
  }
}

function left() {
  if (gc_x >= 75) {
    gc_x = gc_x - 10;
    console.log("When left arrow is pressed, x = " + gc_x + " | y = " + gc_y);
    uploadBackground();
    uploadgreencar();
  }
}

function right() {
  if (gc_x <= 725) {
    gc_x = gc_x + 10;
    console.log("When right arrow is pressed, x = " + gc_x + " | y = " + gc_y);
    uploadBackground();
    uploadgreencar();
  }
}
