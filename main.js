var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_imgwidth = 30;
block_imgheight = 30;

var player_object = "";
var block_img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(player_object)
    })
}

function newImg(getimg) {
    fabric.Image.fromURL(getimg, function(Img) {
        block_img_object = Img
        block_img_object.scaleToWidth(block_imgwidth)
        block_img_object.scaleToHeight(block_imgheight)
        block_img_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(block_img_object)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80") {
        console.log("p and shift pressed together");
        block_imgwidth = block_imgwidth + 10;
        block_imgheight = block_imgheight + 10;
        document.getElementById("currentWidth").innerHTML = block_imgwidth;
        document.getElementById("currentHeight").innerHTML = block_imgheight;
    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("m and shift pressed together");
        block_imgheight = block_imgheight - 10;
        block_imgwidth = block_imgwidth - 10;
        document.getElementById("currentWidth").innerHTML = block_imgwidth;
        document.getElementById("currentHeight").innerHTML = block_imgheight;
    }

    if (keyPressed == "38") {
        up();
        console.log("UP");
    }
    if (keyPressed == "37") {
        left();
        console.log("LEFT");
    }
    if (keyPressed == "40") {
        down();
        console.log("DOWN");
    }
    if (keyPressed == "39") {
        right();
        console.log("RIGHT");
    }
    if (keyPressed == "87") {
        newImg("wall.jpg");
        console.log("w");
    }
    if (keyPressed == "71") {
        newImg("ground.png");
        console.log("g");
    }
    if (keyPressed == "76") {
        newImg("light_green.png");
        console.log("l");
    }
    if (keyPressed == "84") {
        newImg("trunk.jpg");
        console.log("t");
    }
    if (keyPressed == "82") {
        newImg("roof.jpg");
        console.log("r");
    }
    if (keyPressed == "89") {
        newImg("yellow_wall.png");
        console.log("y");
    }
    if (keyPressed == "68") {
        newImg("dark_green.png");
        console.log("d");
    }
    if (keyPressed == "85") {
        newImg("unique.png");
        console.log("u");
    }
    if (keyPressed == "67") {
        newImg("cloud.jpg");
        console.log("c");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_imgheight;
        canvas.remove(player_object);
        console.log("When up arrow is pressed x= " + player_x + " ,y= " + player_y);
        console.log("block image height is " + block_imgheight);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_imgheight;
        canvas.remove(player_object);
        console.log("When down arrow is pressed x= " + player_x + " ,y= " + player_y);
        console.log("block image height is " + block_imgheight);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_imgwidth;
        canvas.remove(player_object);
        console.log("When left arrow is pressed x= " + player_x + " ,y= " + player_y);
        console.log("block image width is " + block_imgwidth);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_imgwidth;
        canvas.remove(player_object);
        console.log("When right arrow is pressed x= " + player_x + " ,y= " + player_y);
        console.log("block image width is " + block_imgwidth);
        player_update();
    }
}