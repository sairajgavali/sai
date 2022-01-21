canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png"

roverX = 10;
roverY = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,roverX,roverY,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38");
    {
        up();
        console.log("up");
    }
    if(keyPressed == "40");
    {
        down();
        console.log("down");
    }
    if(keyPressed == "37");
    {
        left();
        console.log("Left");
    }
    if(keyPressed == "39");
    {
        right();
        console.log("Right");
    }
}

function up()
{
    if(roverY >=0)
    {
        roverY = roverY - 10;
        console.log("when up arrow is pressed, x = "+ roverX + "| y = "+ roverY );
        uploadBackground();
        uploadrover ();
    }
}
function down()
{
    if(roverY <=550)
    {
        roverY = roverY + 10;
        console.log("when down arrow is pressed, x = "+ roverX + "| y = "+ roverY );
        uploadBackground();
        uploadrover ();
    }
}
function left()
{
    if(roverX >=0)
    {
        roverX = roverX - 10;
        console.log("when left arrow is pressed, x = "+ roverX + "| y = "+ roverY );
        uploadBackground();
        uploadrover ();
    }
}
function right()
{
    if(roverX <=700)
    {
        roverX = roverX + 10;
        console.log("when right arrow is pressed, x = "+ roverX + "| y = "+ roverY );
        uploadBackground();
        uploadrover ();
    }
}
